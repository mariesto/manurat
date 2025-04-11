---
title: "Services"
description: "Services implementation"
seriesName: "kubernetes-series"
date: "2024-09-11"
draft: false
---

## Background
When we deploy an application and the pods is already running, we want to be able to access the application.
But we can't directly access the pods due to :
- Pods are often isolated in a private network of the cluster
- Pods IP is changing dynamically based on multiple trigger (no static IP)

Thus, we need a Service, a method for exposing a network application that is running as one or more Pods in your cluster.
A key aim of Services in Kubernetes is that you don't need to modify your existing application to use an unfamiliar service discovery mechanism.  
You use a Service to make that set of Pods available on the network so that clients can interact with it.

## Details
There are 4 types of Services in K8s, and we're going to use `NodePort`.
For other Service type, please refer to [THIS](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)
We're going to use `NodePort` because its simpler and works out of the box. We can append below config in the `deployments.yaml`:
```yaml
[... Deployment detail]
---
apiVersion: v1
kind: Service
metadata:
  name: order-service
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/path: "/actuator/prometheus"
    prometheus.io/port: "9873"
spec:
  selector:
    app: order-service
  ports:
    - port: 9873
      targetPort: 9873
  type: NodePort
```

And to access, we can use command :
```shell
minikube service order-service --url

# http://127.0.0.1:55588 (sample output)
```