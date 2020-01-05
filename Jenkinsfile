podTemplate(yaml: """
apiVersion: v1
kind: Pod
metadata:
   namespace: default
spec:
  serviceAccountName: jenkins
  containers:
  - name: docker
    image: docker:latest
    command:
    - cat
    tty: true
    volumeMounts:
    - mountPath: /var/run/docker.sock
      name: docker-sock
  - name: kubectl
    image: lachlanevenson/k8s-kubectl:v1.17.0
    command:
    - cat
    tty: true
  volumes:
   - name: docker-sock
     hostPath:
       path: /var/run/docker.sock
"""    
) {
    node (POD_LABEL) {
        environment {
            def TIMESTAMP = sh(script: "echo `date +%s`", returnStdout: true).trim()
        }

        container('jnlp') {
            stage('Checkout code') {
                checkout scm
                env.commit = sh returnStdout: true, script: 'git rev-parse HEAD'
                env.buildVersion = sh returnStdout: true, script: 'echo $TIMESTAMP-$commit'
                sh 'echo Build Version is buildVersion'
            }
        }

        container ('docker') {
            stage ('build') {
                sh 'docker build -t react-ui:latest .'
            }

            stage ('upload') {
                withDockerRegistry([credentialsId: 'simon-rowe-github', url: "https://docker.pkg.github.com/"]) {
                    sh 'docker tag react-ui:latest docker.pkg.github.com/simonjamesrowe/react-ui/react-ui:$buildVersion'
                    sh 'docker push docker.pkg.github.com/simonjamesrowe/react-ui/react-ui:$buildVersion'
                } 
            }
        }

        container ('kubectl') {
            stage ("deploy") {
                sh 'kubectl get all'
            }
        }
    }
}
