pipeline {
    agent any
    stages {
        stage('Source Code') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/prinzjoseph/create-react-app.git'
            }
        }
        stage('Installing dependencies') {
            steps {
                sh 'npm install'
            }
        }
       /* stage('Testing') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Start') {
            steps {
                sh 'npm start'
            } 
        } */
    }
}