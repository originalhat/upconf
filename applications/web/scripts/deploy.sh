#!/usr/bin/env bash

set -efux

yarn build
yarn firebase deploy

