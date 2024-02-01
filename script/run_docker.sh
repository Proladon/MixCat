#!/bin/bash

docker run -d \
  --name mixcat-bot \
  -p 5005:5005 \
  --restart always \
  mixcat-bot \