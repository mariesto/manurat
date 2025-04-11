---
title: "Deployments"
description: "Deployments implementation"
seriesName: "kubernetes-series"
date: "2024-09-11"
draft: false
---

## Background
A Kubernetes Deployments is a resource object that tells Kubernetes how to create or update instances of pods. 
Several use case of Deployments : 
- Efficiently scale the number of pods using ReplicaSet 
- Roll out the updated code in a controlled manner 
- Roll back to an earlier deployment version if needed 
- Ensure the desired state is maintained by starting new pods if pods fail or need to be updated 

## Details
Below is a Deployments sample manifest with key concept to note :
- we have 2 instances (pods) running, indicated by the `.spec.replicas` field
- the application will be configured under `spec.template.spec.containers` field 

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "9873"
        prometheus.io/path: "/actuator/prometheus"
    spec:
      containers:
      - name: order-service
        image: mariesto/order-service:latest
        ports:
        - containerPort: 9873
        env:
        - name: SPRING_DATASOURCE_URL
          value: jdbc:postgresql://host.docker.internal:5432/order-db
        - name: SPRING_DATASOURCE_USERNAME
          value: postgres
        - name: SPRING_DATASOURCE_PASSWORD
          value: pwd123
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1024Mi"
            cpu: "1000m"
```

## Command 
- Create a new deployment 
```shell
kubectl apply -f [deploymentFileName].yaml
```

- Get deployment status
```shell
kubectl get deployments
```

- Get deployment details
```shell
kubectl describe deployments
```