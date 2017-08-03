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
          cloverReportDir: './',
          cloverReportFileName: 'clover.xml',
          healthyTarget: [methodCoverage: 70, conditionalCoverage: 80, statementCoverage: 80], // optional, default is: method=70, conditional=80, statement=80
          unhealthyTarget: [methodCoverage: 50, conditionalCoverage: 50, statementCoverage: 50], // optional, default is none
          failingTarget: [methodCoverage: 0, conditionalCoverage: 0, statementCoverage: 0]     // optional, default is none
        ])
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