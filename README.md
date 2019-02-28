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

```bash
> docker run \
    -u root \
    --rm \
    -p 8080:8080 \
    -p 50000:50000 \
    -p 4444:4444 \
    -v jenkins-data:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    --name jenkins \
    jenkinsci/blueocean
```

In this way we are exposing the jenkins server, the agents and the Selenium grid.

So now we ca start some selenium slave in order to attach to the hub.

In our case we are going to launch a slave containing nodejs (https://github.com/oviis/jenkins-dind-nodejs-slave) 

```bash
> docker run \
    -i \
    --rm \
    --name agent \
    --init jenkinsci/jnlp-slave \
    java -jar /usr/share/jenkins/slave.jar
```





## Example

Created a little example test based on nigthwatch and nightwtahc cucumber.



