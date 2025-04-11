---
title: "HPA"
description: "Horizontal Pod Autoscaler"
seriesName: "kubernetes-series"
date: "2024-10-27"
draft: false
---

## Background
Horizontal scaling means that the response to increased load is to deploy more Pods. This is different from vertical scaling, which for Kubernetes would mean assigning more resources (for example: memory or CPU) to the Pods that are already running for the workload.

If the load decreases, and the number of Pods is above the configured minimum, the HorizontalPodAutoscaler instructs the workload resource (the Deployment, StatefulSet, or other similar resource) to scale back down.

### Details
Since we're using minikube, we need to enable the metrics-server by :
```shell
minikube addons enable metrics-server
```

To verify, we can use :
```shell
minikube addons list | grep metrics-server

# | metrics-server | minikube | enabled ✅   | Kubernetes                     |
```

Now, we can update our deployment manifest by adding :
```yaml
[... Service config]
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: order-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: order-service
  minReplicas: 1
  maxReplicas: 3
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
```