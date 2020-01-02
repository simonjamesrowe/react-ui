podTemplate(yaml: """
apiVersion: v1
kind: Pod
metadata:
  labels:
    jenkins/kube-default: true
    app: jenkins
    component: agent
spec:
  containers:
    - name: jnlp
      image: jenkins/jnlp-slave
      resources:
        limits:
          cpu: 1
          memory: 2Gi
        requests:
          cpu: 1
          memory: 2Gi
      imagePullPolicy: Always
      env:
      - name: POD_IP
        valueFrom:
          fieldRef:
            fieldPath: status.podIP
      - name: DOCKER_HOST
        value: tcp://localhost:2375
    - name: dind
      image: docker:18.05-dind
      securityContext:
        privileged: true
      volumeMounts:
        - name: dind-storage
          mountPath: /var/lib/docker
    - name: kubectl
      image: lachlanevenson/k8s-kubectl:v1.17.0   
  volumes:
    - name: dind-storage
      emptyDir: {}
  

"""    
) {
    node (POD_LABEL) {
        container('jnlp') {
            stage('Checkout code') {
                checkout scm
                env.commit = sh returnStdout: true, script: 'git rev-parse HEAD'
            }
            
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
