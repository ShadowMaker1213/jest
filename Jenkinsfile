node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Init'){
         echo 'init ... '
           
       }




    }
    catch (err) {
        step([$class: 'JUnitResultArchiver', testResults: '**/reports/junit/*.xml', healthScaleFactor: 1.0])
        currentBuild.result = "FAILURE"

        throw err
    }

}