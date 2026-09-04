# Use this file to your own code to run at NPM `prepublish` event.

echo ""
echo "=> Creating type definitions into dist/types ..."

pnpm exec tsc -p tsconfig.publish.json

echo "=> Type definitions created."
