pipeline {
    agent any
    stages {
        stage('Test') {
            withKubeConfig([credentialsId: 'kubernetes']) {
                sh 'kubectl get all'
            }
        }
    }
}