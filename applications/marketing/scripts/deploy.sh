#!/usr/bin/env bash

set -efux

# 1. https://github.com/HashNuke/heroku-buildpack-elixir.git
# 2. https://github.com/gjaldon/heroku-buildpack-phoenix-static.git

pushd ../../
  git subtree push --prefix applications/marketing heroku master
popd

