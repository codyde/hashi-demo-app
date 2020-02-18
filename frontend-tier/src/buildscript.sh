#/bin/bash

docker build -t frontend:latest .
docker tag frontend:latest frontend:latest
cd app-tier
docker build -t backend:latest .
docker tag backend:latest backend:latest
cd ../db-tier
docker build -t db:latest . 
docker tag db:latest db:latest
cd ../app-tier 
sudo docker-compose up
