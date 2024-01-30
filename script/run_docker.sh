#!/bin/bash

docker run -d \
  --name mixcat-bot \
  -p 5005:5005 \
  --network shelterzone \
  --restart always \
  mixcat-bot \