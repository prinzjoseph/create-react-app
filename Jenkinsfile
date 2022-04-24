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
        stage('Testing') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'rm -rf build'
                sh 'npm run build'
            } 
        }
        stage('Deploy') {
            steps {
                sh '''
                ssh root@13.233.36.39 "rm -rf /var/www/react"
                rsync -avz build/ root@13.233.36.39:/var/www/react
                echo "Deployed to https://nathan.zimail.ml"
                '''
            } 
        }
    }
}