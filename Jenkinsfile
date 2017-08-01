node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Init'){
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

        currentBuild.result = "FAILURE"

        throw err
    }

}