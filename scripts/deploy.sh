#!/usr/bin/env bash

set -e

echo "## 🔥 applications:web 🔥 ##"

pushd applications/web
  yarn install --no-progress
  yarn deploy
popd
