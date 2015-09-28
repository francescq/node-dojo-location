#!/bin/bash

DEPLOY_PATH=/opt/microservices
MICROSERVICE=node-dojo-location
MS_PATH=$DEPLOY_PATH/$MICROSERVICE
LOG_PATH=/mnt/log/microservices/$MICROSERVICE/
INIT_SCRIPT=/etc/init/location.conf

if [ ! -d $DEPLOY_PATH ]; then
	echo "Creating $DEPLOY_PATH"
	mkdir -p $DEPLOY_PATH
fi

if [ ! -d $MS_PATH ]; then
	echo "Copying files in $MS_PATH"
	mkdir -p $MS_PATH
	cp -R ../../node-dojo-location/* $MS_PATH/
fi

if [ ! -d $LOG_PATH ]; then
	echo "Creating $LOG_PATH"
	mkdir -p $LOG_PATH
fi

if [ ! -f $INIT_SCRIPT ]; then
	echo "Creating the service init script"
	cp ./templates/location.conf /etc/init/
fi

if ! cat /etc/passwd | grep nodeuser > /dev/null 2>&1; then
	echo "Creating nodeuser system user to run the microservice"
	adduser nodeuser --system --no-create-home --group 
fi

echo "Setting permissions for nodeuser system user"
chown -R nodeuser:nodeuser $MS_PATH 
chown -R nodeuser:nodeuser $LOG_PATH

echo "Restarting the service"
service location restart