#!/bin/bash
DOTENV_PATH=/code/.env.local docker-compose -f docker-compose.base.yml -f docker-compose.dev.yml "$@"
