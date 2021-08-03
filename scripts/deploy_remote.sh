if [ $DOCKER_MACHINE_NAME ]
then
    echo "Deploying to"
    echo $DOCKER_MACHINE_NAME
    echo "------"
    ./scripts/docker_compose_remote.sh down && ./scripts/docker_compose_remote.sh up --build -d
else
    echo "Please switch to a remote docker machine"
    exit 1
fi
