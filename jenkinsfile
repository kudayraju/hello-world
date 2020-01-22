pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'export M2_HOME=/opt/maven'
                sh 'export PATH=${M2_HOME}/bin:${PATH}'
                sh 'mvn -B -DskipTests clean package' 
            }
        }
    }
}
