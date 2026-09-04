# Migration Guide

## 1.x → 2.0

`2.0` drops the legacy React 15.6 build and the `forwardRef` wrapper. For most apps the upgrade is
a version bump and nothing else — the JSX you already write is unchanged.

### At a glance

| | 1.x | 2.0 |
|---|---|---|
| Supported React | `^0.14.7 \|\| ^15 \|\| ^16 \|\| ^17 \|\| ^18 \|\| ^19` | `>=19` |
| `import AspectRatio from 'react-aspect-ratio'` | legacy React 15.6 class component | the modern component |
| `import { AspectRatio } from 'react-aspect-ratio'` | the modern component | the modern component (unchanged) |
| Implementation | `forwardRef` wrapper | plain function component, `ref` as a prop |
| Source layout | `src/react-15.6`, `src/react-latest` | `src/index.tsx` |

### 1. React 19 is required

```
npm install react-aspect-ratio@2 react@^19 react-dom@^19
```

React 19 is what makes the `forwardRef` removal possible — it passes `ref` to function components as
an ordinary prop. On React 18 and below the `ref` would silently never attach, so `peerDependencies`
is now `>=19.0.0`.

**Staying on React 18 or older?** Stay on `react-aspect-ratio@1.x`. It is unchanged and still works;
there is no security or correctness fix in `2.0` that you would be missing.

### 2. The default export changed meaning

In `1.x` the two exports were different components:

```js
import AspectRatio from 'react-aspect-ratio';        // React 15.6 class component (deprecated)
import { AspectRatio } from 'react-aspect-ratio';    // the modern component
```

In `2.0` they are the same component, so **both imports keep working** and both now render the modern
implementation:

```js
import AspectRatio from 'react-aspect-ratio';        // same component
import { AspectRatio } from 'react-aspect-ratio';    // same component
```

Nothing to change at the call site. The only behavioral difference is for code that was deliberately
using the default import to get the React 15.6 class component — it now gets a function component,
which means:

* it can no longer be given a class instance ref (`ref.current` is the `div`, not a component instance);
* `componentDidUpdate`'s `node.style.setProperty` fallback for [facebook/react#6411](https://github.com/facebook/react/issues/6411)
  is gone. React has written custom properties into the `style` prop natively since React 16, so this
  fallback is dead code on any supported version.

### 3. `forwardRef` was removed — `ref` still works

`ref` is forwarded to the underlying `div` exactly as before:

```jsx
const ref = useRef<HTMLDivElement>(null);

<AspectRatio ratio="16/9" ref={ref}>
  <img src="…" alt="" />
</AspectRatio>
```

The only visible difference is in a type position: the component's type is now
`(props: Props) => JSX.Element` rather than
`ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>>`. If you were writing that type out
by hand, use `typeof AspectRatio` instead:

```ts
// before
const Wrapped: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> = AspectRatio;

// after
const Wrapped: typeof AspectRatio = AspectRatio;
```

`Props` is still exported and still extends `ComponentProps<'div'>`, which in React 19's types already
includes `ref`.

### 4. Deep imports are gone

If you were reaching into the build output, those paths no longer exist:

```js
// no longer available
import AspectRatio from 'react-aspect-ratio/dist/react-latest';
import AspectRatio from 'react-aspect-ratio/dist/react-15.6';

// use the package entry point
import { AspectRatio } from 'react-aspect-ratio';
```

### Unchanged

* The `ratio` prop — same `string | number`, same default of `1`.
* The default class name `react-aspect-ratio-placeholder`.
* The `--aspect-ratio` custom property and the CSS that reads it.
* `import 'react-aspect-ratio/aspect-ratio.css'` — still required, still the same file.
* `main` / `module` / `types` entry points, and the `es`, `umd`, and `next` builds.
