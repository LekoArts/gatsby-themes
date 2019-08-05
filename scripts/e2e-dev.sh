#!/bin/bash

EXAMPLE_NAME=$1

yarn concurrently --kill-others "yarn tsc:compile:watch" "yarn start-server-and-test 'yarn workspace $EXAMPLE_NAME develop:cypress' http://localhost:8000 cy:open"