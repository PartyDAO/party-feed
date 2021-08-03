#!/bin/bash
DOTENV_PATH=/configs/remote.env docker-compose -f docker-compose.base.yml -f docker-compose.remote.yml "$@"