node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Init'){
           step([$class: 'JUnitResultArchiver', testResults: './examples/react/*.xml', healthScaleFactor: 1.0])
           sh 'npm install'
           sh 'cd examples/react'
           sh 'npm install'
       }


       stage('Test'){

         env.NODE_ENV = "development"

         print "Environment will be : ${env.NODE_ENV}"

         sh 'cd examples/react'
         sh 'npm run test'

       }


    }
    catch (err) {
        step([$class: 'JUnitResultArchiver', testResults: '**/reports/junit/*.xml', healthScaleFactor: 1.0])
        currentBuild.result = "FAILURE"

        throw err
    }

}