podTemplate(yaml: """
apiVersion: v1
kind: Pod
metadata:
   namespace: default
spec:
  serviceAccountName: jenkins
  containers:
  - name: docker
    image: docker:17.12.1-ce
    env:
      - name: DOCKER_HOST
        value: 'tcp://dind:2375'
    command:
    - cat
    tty: true
  - name: kubectl
    image: lachlanevenson/k8s-kubectl:v1.17.0
    command:
    - cat
    tty: true
"""    
) {
    node (POD_LABEL) {
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
