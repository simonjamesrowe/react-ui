podTemplate(yaml: """
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
) {
    node (POD_LABEL) {
        container ('kubectl') {
            stage ("WTF") {
                sh 'kubectl get all'
            }
        }
    }
}
