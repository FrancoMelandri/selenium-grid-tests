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







