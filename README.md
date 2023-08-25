## Course
[Begineers Guide - FreeCodeCamp](https://www.youtube.com/watch?v=d6WC5n9G_sM)

## Image
[Image for k8s-web-hello - Docker Hub](https://hub.docker.com/repository/docker/swarajkumar/k8s-web-hello/general)

## Problem Statement
	1. Learn basic commands related to minikube and kubectl
	2. Build a custom image of a simple node application
	3. Initialize and scale pods using deployment based on the custom image
	4. Create nodeport and loadbalancer services
	5. Rollout new image changes to pods

## Installation and Setup:
	- choco install kubernetes-cli
	- choco install minikube
	- Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
	
## Cluster Operations:
	- minikube start --driver=virtualbox | hyperv (create cluster)
	- minikube delete
	- minikube status (cluster status)
	- minikube ip (node IP)
	- minikube dashboard (Minikube GUI)
	- minikube ssh (login to cluster)
	  - docker ps | grep <filter-name> (use filter to find containers)
	  - docker exec -it <container-id> sh (login to a container)
		- hostname
		- hostname -i
		- curl <ip>
		- exit

## Instance Info.:
	- kubectl cluster-info (list cluster info)
	- kubectl get nodes (list all nodes)
	- kubectl get namespaces (list all namespaces)
	- kubectl get pods (list all pods)
	- kubectl get deployments (list all deployments)
	- kubectl get services (list all services along with cluster IPs)
	
	- kubectl get pods -o wide (list pods with important attributes)
	- kubectl get pods --namespace=<namespace> (list pods within a namespace)

## Pod Operations:
	- kubectl run <pod-name> --image=<image-name> (create a pod from an image)
	- curl <pod-ip> (connect to pod)
	- kubectl describe pod <pod-name> (describe a pod)
	- kubectl delete pod <pod-name> (delete a pod)

## Deployment Operations:
	- kubectl create deployment <deployment-name> --image=<image-name> (create a deployment)
	- kubectl describe deployment <deployment-name> (describe a deployment)
	- kubectl delete deployment <deployment-name> (delete a deployment)
	- kubectl scale deployment <deployment-name> --replicas=<desired-replicas> (scale pods)
	- kubectl expose deployment <deployment-name> --port=<internal-port> --target-port=<external-port> (expose an external port)

## Service Operations: ClusterIP (default) | NodePort | LoadBalancer
	- kubectl expose deployment <deployment-name> --type=<service-type> --port=<internal-port>

## Rolling Update:
	- kubectl set image deployment <deployment-name> <pod-name>=<hub-ID>/<new-image>:<tag>
	- kubectl rollout status deployment <deployment-name>

## Delete all resources in default namespace: 
	- kubectl delete all --all

## Notes:
	1. Docker enables separation of an application from underlying infrastructure. whereas,
	   Kubernetes is a container orchestration tool that provides load balancing and simplies container management on multiple hosts.

	2. A pod is a smallest deployment unit in a kubernetes cluster. It is a collection of tightly coupled containers which communicate via localhost. whereas,
	   A node is a unit in a kubernetes cluster that provides allocates necessary computing and storage resources to pods. It maintains lifecycle of pods.
		
	3. In a typical Kubernetes setup, We can deploy applications in Pods, which are then scheduled onto Nodes within a Cluster. The control plane ensures the desired state of the    cluster and monitors the health of nodes and pods, making Kubernetes a powerful platform for container orchestration and management.
	   
	4. A pod is automatically initialized when a deployment is created.
	
	5. If no service type is mentioned, A ClusterIP service is automatically initialized when a deployment is exposed and it is accessible only from nodes within the cluster.
	   minikube ssh & curl <cluster-ip>:<external-port>
	   
	6. A service of type NodePort or LoadBalancer is accessible from a browser.
	   minikube service <service-name> | curl <node-ip>:<random-port>
	  
	7. Kubernetes automatically creates desired number of pods if any is removed.