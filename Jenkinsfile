node {

    currentBuild.result = "SUCCESS"

    try {

       stage('Checkout'){

          checkout scm
       }

       stage('Init'){
           sh 'npm install'
       }


       stage('Test'){

         env.NODE_ENV = "development"

         print "Environment will be : ${env.NODE_ENV}"

         
         sh 'npm run test'

       }


    }
    catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }

}