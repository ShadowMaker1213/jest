node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){
          deleteDir()
          checkout scm
       }

       stage('Init'){
         echo 'init ... '
         checkstyle canComputeNew: false, defaultEncoding: '', healthy: '', pattern: 'checkstyle-result.xml', unHealthy: ''

         junit allowEmptyResults: true, testResults: 'examples/react/*.xml'

        publishHTML([allowMissing: true, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])
       }
       
       stage('Clean'){
           
           echo 'clean...'
           deleteDir()
       }




    }
    catch (err) {
        currentBuild.result = "FAILURE"

        throw err
    }

}