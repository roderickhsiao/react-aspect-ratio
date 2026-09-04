#!/bin/bash

# IMPORTANT
# ---------
# This is an auto generated file with React CDK.
# Do not modify this file.
# Use `.scripts/user/prepublish.sh instead`.

echo "=> Transpiling 'src' into ES5 ..."
echo ""
rm -rf ./dist
NODE_ENV=production BABEL_ENV=cjs ./node_modules/.bin/babel --extensions ".ts,.tsx" --ignore "./src/**/*.test.tsx,./src/stories/**" ./src --out-dir ./dist

echo "=> Transpiling 'src' into ES6 ..."
NODE_ENV=production BABEL_ENV=es ./node_modules/.bin/babel --extensions ".ts,.tsx" --ignore "./src/**/*.test.tsx,./src/stories/**" ./src --out-dir ./dist/es

echo "=> Transpiling 'src' into UMD ..."
NODE_ENV=production BABEL_ENV=umd ./node_modules/.bin/babel --extensions ".ts,.tsx" --ignore "./src/**/*.test.tsx,./src/stories/**" ./src --out-dir ./dist/umd

echo "=> Transpiling 'src' into NEXT ..."
NODE_ENV=production BABEL_ENV=next ./node_modules/.bin/babel --extensions ".ts,.tsx" --ignore "./src/**/*.test.tsx,./src/stories/**" ./src --out-dir ./dist/next

# The es/ and next/ builds are ESM but carry a .js extension, and the package has no
# top-level "type". Without this marker Node parses them as CommonJS.
echo "=> Marking ESM output directories ..."
for esm_dir in ./dist/es ./dist/next; do
  echo '{"type":"module"}' > "$esm_dir/package.json"
done

echo ""
echo "=> Transpiling completed."

. .scripts/user/prepublish.sh
