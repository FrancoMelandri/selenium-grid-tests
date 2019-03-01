- docker buil -t enkins/selenium .

- docker network create grid

- docker run -u root --rm --net grid -p 8080:8080 -p 50000:50000 -p 4444:4444 -v jenkinsdata:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --name jenkins jenkins/selenium

- docker run --net grid -e HUB_HOST=jenkins -v /dev/shm:/dev/shm selenium/node-chrome:3.141.59-iron
- docker run --net grid -e HUB_HOST=jenkins -v /dev/shm:/dev/shm selenium/node-firefox:3.141.59-iron

- docker network rm grid

