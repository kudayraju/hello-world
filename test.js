node () {
    environment {
    M2_HOME= "/opt/maven"
    PATH= "${M2_HOME}/bin:${PATH}"
    }
	stage('Stage-Function-EG') { 
            uday()      
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
    }
}

def uday() {
	println "This is the section for defining stage function"
}
