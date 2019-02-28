def dockerUtils = load ('./pipeline/docker.groovy')

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
                        dockerUtils.buildDockerImage(env.DOCKER_IMG)
                    }
                }
            }
        }

        stage ("test") {
            steps {
                dir("app") { 
                }
            }
        }
    }
}