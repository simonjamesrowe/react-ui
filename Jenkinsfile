pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                withKubeConfig {
                    sh 'kubectl get all'
                }
            }
        }
    }
}