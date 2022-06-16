#!/bin/bash

if [ -z "$BASH_VERSION" ]
then
    exec bash "$0" "$@"
fi

EXAMPLE_NAME=$1

chmod +x ./node_modules/.bin/gatsby && # Sometimes necessary

yarn workspace "$EXAMPLE_NAME" build:cypress && # run "gatsby build" in the example
yarn start-server-and-test "yarn workspace $EXAMPLE_NAME serve" http://localhost:9000 "yarn cy:run --spec 'cypress/e2e/$EXAMPLE_NAME.ts'" # run "gatsby serve" and "cypress run"