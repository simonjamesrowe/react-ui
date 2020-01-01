pipeline {
    agent none
    stages {
        stage('Test') {
            node {
                steps {
                    sh 'kubectl get all'
                }
            }
        }
    }
}