import type { ComponentProps } from 'react';

export type Props = ComponentProps<'div'> & {
  ratio?: string | number;
};
