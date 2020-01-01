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
                    withKubeConfig([credentialsId : '16efc026-221e-4e28-9d67-efa698a95730', serverUrl: 'https://kubernetes.default.svc.cluster.local']) {
                        sh 'kubectl get all'
                    }
                }
            }
        }
    }
}