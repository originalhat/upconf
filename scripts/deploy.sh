#!/usr/bin/env bash

set -e

echo "## 🔥 applications:web 🔥 ##"

pushd applications/web
  yarn install --no-progress
  yarn build:production
  yarn firebase deploy --token "$FIREBASE_TOKEN"
popd
