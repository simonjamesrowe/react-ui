pipeline {
    agent any
    stages {
        withKubeConfig([credentialsId: 'kubernetes']) {
            stage('Test') {
                steps {
                    sh 'kubectl get all'
                }
            }
        }
    }
}