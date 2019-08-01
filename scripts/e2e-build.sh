#!/bin/bash

EXAMPLE_NAME=$1

command -v sudo &&

yarn tsc:compile &&
yarn workspace "$EXAMPLE_NAME" build:cypress &&
yarn ssat "yarn workspace $EXAMPLE_NAME serve" http://localhost:9000 "yarn cy:run --spec 'cypress/e2e/build/$EXAMPLE_NAME.js'"