#!/bin/bash

EXAMPLE_NAME=$1

command -v sudo && # The default node executor does need that

chmod +x ./node_modules/.bin/gatsby && # Sometimes necessary

yarn tsc:compile && # Compile all files in e2e to e2e/build
yarn workspace "$EXAMPLE_NAME" build:cypress && # run "gatsby build" in the example
yarn ssat "yarn workspace $EXAMPLE_NAME serve" http://localhost:9000 "yarn cy:run --spec 'cypress/e2e/build/$EXAMPLE_NAME.js'" # run "gatsby serve" and "cypress run"