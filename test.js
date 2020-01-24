node () {
    stage('Build') { 
	println "This is  build stage"
    }
	stage('Stage-Function-EG') { 
            uday()
	}
}

def uday() {
	println "This is the section for defining stage function"
}
