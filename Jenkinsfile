//pipeline {       //Commented 1&2 lines to test node(){ which allows def
//    agent any

node () {
    environment {
    M2_HOME= "/opt/maven"
    PATH= "${M2_HOME}/bin:${PATH}"
    }
/*	stage('Stage-Function-EG') { 
            Eg1-of-stg-func()      
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
*/    
}

def Eg1-of-stg-func() {
	println "This is the section for defining stage function"
}
