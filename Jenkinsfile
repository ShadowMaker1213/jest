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

        step([
            $class: 'CloverPublisher',
            cloverReportDir: 'report',
            cloverReportFileName: 'clover.xml'
        ])

        
       }

       stage('puhlish HTML'){
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'e2e/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: ''])

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