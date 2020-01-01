pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                withKubeConfig([credentialsId: 'kubernetes']) {
                    sh 'kubectl get all'
                }
            }
        }
    }
}