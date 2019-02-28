pipeline {
    agent any

    script {
        env.DOCKER_IMG = 'test'
    }   

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
                    sh 'make setup_docker'
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