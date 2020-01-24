pipeline {       
    agent any
    environment {
    M2_HOME= "/opt/maven"
    PATH= "${M2_HOME}/bin:${PATH}"
    }
    stages {
        stage('Build') { 
            steps {
                sh '''
                    echo "PATH = ${PATH}"
                    echo "M2_HOME = ${M2_HOME}"
                    mvn clean package
                '''
			}
        }
        stage('Sonar') { 
            steps {
                sh '''
                    mvn sonar:sonar
                '''
            }        
        }
    }   
}
