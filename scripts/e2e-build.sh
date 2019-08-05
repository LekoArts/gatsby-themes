#!/bin/bash

if [ -z "$BASH_VERSION" ]
then
    exec bash "$0" "$@"
fi

EXAMPLE_NAME=$1

echo "Start E2E script" &&

chmod +x ./node_modules/.bin/gatsby && # Sometimes necessary

yarn tsc:compile && # Compile all files in e2e to e2e/build
yarn workspace "$EXAMPLE_NAME" build:cypress && # run "gatsby build" in the example
yarn start-server-and-test "yarn workspace $EXAMPLE_NAME serve" http://localhost:9000 "yarn cy:run --spec 'cypress/e2e/build/$EXAMPLE_NAME.js'" && # run "gatsby serve" and "cypress run"

echo "E2E Script ended"