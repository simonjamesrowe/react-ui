pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                withKubeConfig([credentialsId : '16efc026-221e-4e28-9d67-efa698a95730', serverUrl: 'https://192.168.64.14:8443']) {
                    sh 'kubectl get all'
                }
            }
        }
    }
}