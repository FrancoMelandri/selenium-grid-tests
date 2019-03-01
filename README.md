# Selenium Grid



## Abstract

Based on the selenium standalone server

Allows you to scale by distributing tests on several machines ( parallel execution )



First of all you have to launch the hub using the role hub

```bash
> docker run -d -p 4444:4444 --name selenium-hub selenium/hub:3.141.59-hafnium
--
> java -jar selenium-server-standalone-3.9.jar -role hub
```





After that you can launch the nodes that communicate with the hub and perform the requested actions by the hub using the role node

```bash
> docker run -d --link selenium-hub:hub -v /dev/shm:/dev/shm selenium/node-chrome:3.141.59-hafnium

> docker run -d --link selenium-hub:hub -v /dev/shm:/dev/shm selenium/node-firefox:3.141.59-hafnium

---
> java -jar selenium-server-standalone-3.9.jar -role node -hub http://localhost:4444/grid/register
```





## Jenkins

Jenkins allows you to handle Selenium Grid in the right way using the **Selenium Plugin**

This plugin sets up Selenium Grid in the following way

- On master, Selenium Grid Hub is started on port 4444, unless configured otherwise in Jenkins global configurations. This is where all your tests should connect to.

- For each slave, necessary binaries are copied and Selenium RCs are started.
- RCs and the Selenium Grid Hub are hooked up together automatically.

Grid can also accept additional nodes launched outside Jenkins.



## Local environment

Setting up a master slave installation in local to test selenium grid

First of all launch a Jenkins server using docker.

Create a docker network

```bash
> docker network create grid
```



```bash
> docker run \
    -u root \
    --rm \
    --net grid \
    -p 8080:8080 \
    -p 50000:50000 \
    -p 4444:4444 \
    -v jenkins-data:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --name jenkins \
    jenkinsci/blueocean
```

In this way we are exposing the jenkins server, the agents and the Selenium grid.

You have to change the URL of the jenkins server from http://localhost:8080 to http://jenkins:8080

Now you have to insert a new entry in the hosts file with the IP address of the docker Jenkins  just launched using a name you want

```bash
172.18.0.2 jenkins
```

An then you can start the docker image of a slave node in this way (for chrome)

```bash
> docker run \
  --net grid \
  -e HUB_HOST=jenkins \
  -v /dev/shm:/dev/shm selenium/node-chrome:3.141.59-iron
```

and for firefox

```bash
> docker run \
  --net grid \
  -e HUB_HOST=jenkins \
  -v /dev/shm:/dev/shm selenium/node-firefox:3.141.59-iron
```

So now we ca start some selenium slave in order to attach to the hub and the hub is inside Jenkins because we have installed the selenium plugin



## Example

Created a little example test based on nightwatch and nightwatch cucumber.

The most important thing is to configure in the right way nightwatch in order to let the test run in the node test of the grid. So take a look to the file *nightwatch.conf.js*

```json
    selenium: {
        start_process: false,
        server_path: seleniumServer.path,
        host: 'jenkins',
        port: 4444
    },
```

Setting the flag start_process as false we are going to indicate the test must use the remote jenkins hub. 



## Pipeline

The pipeline build a docker image containing all the files needed to launch the test, run the container and after taht run the nightwatch test inside the container.

The container will be run using --network=host in order to let the container able to find the host name of the selenium hub. 