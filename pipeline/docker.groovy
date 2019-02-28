def buildDockerImage (image) {
    sh "docker build --pull=true -t ${image} ."
    sh "docker run -td --restart unless-stopped -tmpfs /tmp:exec --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro --name ${image}"    
    sh "docker cp ./ ${image}:/opt/task"
}
    
													
	