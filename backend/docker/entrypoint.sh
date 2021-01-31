#!/bin/bash
cd /usr/src/app
yarn && yarn tsc
yarn run typeorm migration:run
yarn dev:server