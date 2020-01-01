pipeline {
    agent none
    stages {
        node {
            stage('Test') {
                steps {
                    sh 'kubectl get all'
                }
            }
        }
    }
}