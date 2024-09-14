#! /bin/bash

set -e

# Check if the eslint is setup up correctly

npx eslint . --ext .js,.jsx,.ts,.tsx

# Check if the prettier is setup up correctly

npx prettier --check .

# check if any rules conflict with prettier

npx eslint-config-prettier src/App.tsx --check
