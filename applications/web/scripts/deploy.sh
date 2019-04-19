#!/usr/bin/env bash

set -efux

yarn build:production
yarn firebase deploy

