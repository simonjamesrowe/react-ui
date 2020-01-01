pipeline {
    agent any
    stages {
        stage('Test') {
             withKubeConfig([credentialsId: 'kubernetes']) {
                steps {
                    sh 'kubectl get all'
                }
            }
        }
    }
}