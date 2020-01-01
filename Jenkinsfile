pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
metadata:
   namespace: default
spec:
  containers:
  - name: kubectl
    image: bitnami/kubectl
    command:
    - cat
    tty: true
"""
        }
    }
    stages {
        stage('Kubectl') {
            steps {
                container ('kubectl') {
                    sh 'kubectl get all'
                }
            }
        }
    }
}