---
title: "Pods"
description: "Pods implementation"
seriesName: "kubernetes-series"
date: "2024-09-11"
draft: false
---

## Background
Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.
Kubernetes uses pods to run an instance of our application and a single pod represents a single instance of that application. We can scale out our application horizontally by adding more Pod replicas.
Usually, we didn't create the pods manually. Instead, create them using workload resources such as Deployment

### Details
Similar with other Kubernetes object, we can define a pod like below :
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
  - name: nginx
    image: nginx:1.14.2
    ports:
    - containerPort: 80
```

