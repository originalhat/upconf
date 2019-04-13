#!/usr/bin/env bash

set -efux

pushd ../../
  git subtree push --prefix applications/marketing heroku master
popd

