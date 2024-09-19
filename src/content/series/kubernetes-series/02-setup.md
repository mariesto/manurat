---
title: "Development Setup"
description: "Prepare local setup before hands on 🛠️"
seriesName: "kubernetes-series"
date: "2024-09-12"
draft: false
---

## Intro
Before we start to hands on, there are couple of things need to be prepared :
- Docker
- kubectl
- minikube

Yes, we're going to use minikube in local so that we can have cluster to play with.
You can refer to [THIS](https://kubernetes.io/docs/tasks/tools/) to do the installations.
Since we're going to focus on the kubernetes context, I've create an application written with Java Spring Boot and pushed to [DockerHub](https://hub.docker.com/repository/docker/mariesto/order-service/general). We're going to use this as a demo application to start with k8s. Or if you have any other applications to use, feel free to choose.

## Setup
This spring boot application required PostgresDB to run, which can be done either by running this command :
```
docker run -d \
  --name db \
  -e POSTGRES_USER=user \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=mydb \
  -p 5432:5432 \
  postgres:13
```
or create a `docker-compose.yaml` :
```
services:
  order-db:
    image: postgres
    environment:
      POSTGRES_DB: order-db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: pwd123
    ports:
      - "5432:5432"
```