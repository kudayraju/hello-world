pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh ...
                    'export M2_HOME=/opt/maven'
                    'export PATH=${M2_HOME}/bin:${PATH}'
                    'mvn -B -DskipTests clean package'
                ...
            }
        }
    }
}
