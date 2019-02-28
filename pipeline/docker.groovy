def buildDockerImage () {
    sh "docker build --pull=true -t ${DOCKER_IMG} ."
    sh "docker run -td --restart unless-stopped -tmpfs /tmp:exec --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro --name ${DOCKER_TAG}"    
    sh "docker cp ./ $(DOCKER_IMG):/opt/task"
}
    
													
	