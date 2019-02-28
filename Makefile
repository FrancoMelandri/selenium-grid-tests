.PHONY: all

export DOCKER_IMG

setup_docker:
	docker build --pull=true -t ${DOCKER_IMG} .
	docker run -td --restart unless-stopped -tmpfs /tmp:exec --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro --name $(DOCKER_TAG)												
	docker cp ./ $(DOCKER_IMG):/opt/task

