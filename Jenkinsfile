pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
metadata:
   namespace: default
spec:
  serviceAccountName: jenkins
  containers:
  - name: kubectl
    image: lachlanevenson/k8s-helm:v2.8.1
    command:
    - cat
    tty: true
"""
        }
    }
    stages {
        container ('kubectl') {
            stage('Kubectl') {
                steps {
                    sh 'kubectl get all'
                }
            }
        }
    }
}