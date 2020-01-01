podTemplate(yaml: """
apiVersion: v1
kind: Pod
metadata:
   namespace: default
spec:
  serviceAccountName: jenkins
  containers:
  - name: docker
    image: docker:19.03.0-dind
    command:
    - cat
    tty: true
    volumeMounts:
     - name: docker
       mountPath: '/var/lib/docker' 
    securityContext:
      privileged: true
  - name: kubectl
    image: lachlanevenson/k8s-kubectl:v1.17.0
    command:
    - cat
    tty: true
  volumes:
   - name: docker
     emptyDir: {}
"""    
) {
    node (POD_LABEL) {
        container('jnlp') {
            stage('Checkout code') {
                checkout scm
                env.commit = sh returnStdout: true, script: 'git rev-parse HEAD'
            }
        }

        container ('docker') {
            stage ('build') {
                sh 'docker build -t simonjamesrowe/react-ui/react-ui:latest .'
            }
        }

        container ('kubectl') {
            stage ("deploy") {
                sh 'kubectl get all'
            }
        }
    }
}
