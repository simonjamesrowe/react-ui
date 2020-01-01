pipeline {
    agent none
    node {
        stages {
            stage('Test') {
                steps {
                    sh 'kubectl get all'
                }
            }
        }
    }
}