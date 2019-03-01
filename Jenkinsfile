
script {
    env.DOCKER_IMG = 'test'
}   

pipeline {
    agent any

    stages {
        stage ("checkout") {
            steps {
                dir("app") {
                    checkout scm
                }
            }
        }

        stage ("prepare") {
            steps {
                dir("app") {
                    script {
                        sh "docker build --pull=true -t ${env.DOCKER_IMG} ."
                        sh "docker run -td --restart unless-stopped --tmpfs /tmp:exec --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro --name ${env.DOCKER_IMG} ${env.DOCKER_IMG}"
                        sh "docker cp ./ ${env.DOCKER_IMG}:/opt/task"
                    }
                }
            }
        }

        stage ("linting and test") {
            steps {
                dir("app") {
                    script {
                        sh "docker exec -t ${env.DOCKER_IMG} bash -c \"npm run lint\""
                        sh "docker exec -t ${env.DOCKER_IMG} bash -c \"npm test\""
                    }
                }
            }
        }
    }
}