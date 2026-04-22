#!/bin/bash
set -e

fnm use 16

ROOT=$(git rev-parse --show-toplevel)

echo "Building refactoring..."
cd "$ROOT/refactoring" && yarn install --frozen-lockfile && yarn build

echo "Building typescript-exports..."
cd "$ROOT/typescript-exports" && yarn install --frozen-lockfile && yarn build

echo "Building do-not-call-fc..."
cd "$ROOT/do-not-call-fc" && yarn install --frozen-lockfile && yarn build:web

cd "$ROOT"

mv refactoring/public /tmp/jscodeshift-build
mv typescript-exports/public /tmp/typescript-exports-build
mv do-not-call-fc/dist/web /tmp/do-not-call-fc-build

git checkout gh-pages

rm -rf jscodeshift && mv /tmp/jscodeshift-build jscodeshift
rm -rf typescript-exports && mv /tmp/typescript-exports-build typescript-exports
rm -rf do-not-call-fc && mv /tmp/do-not-call-fc-build do-not-call-fc

git add jscodeshift typescript-exports do-not-call-fc
git commit -m "Update build"
git push origin gh-pages

git checkout master
