---
title: "Deployments"
description: "Deployments implementation"
seriesName: "kubernetes-series"
date: "2024-09-11"
part: 1
draft: false
---

## Background
A Kubernetes deployment is a resource object that tells Kubernetes how to create or update instances of pods that contain a containerized application. 
Deployments can: 
- Scale: Efficiently scale the number of replica pods 
- Update code: Roll out updated code in a controlled manner 
- Roll back: Roll back to an earlier deployment version if needed 
- Maintain state: Ensure the desired state is maintained by starting new pods if pods fail or need to be updated 
- Orchestrate changes: Orchestrate changes to achieve the desired state of an application 