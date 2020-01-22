pipeline {
    agent any
    environment {
    export M2_HOME=/opt/maven
    export PATH=${M2_HOME}/bin:${PATH}
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                    mvn -B -DskipTests clean package
                '''
            }
        }
    }
}
