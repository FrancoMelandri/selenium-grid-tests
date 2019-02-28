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
        stage ("test") {
            steps {
                dir("app") {
                    sh 'node nightwatch'
                }
            }
        }
    }
}