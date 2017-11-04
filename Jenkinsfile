pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
                sh 'npm run production'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'sudo -u www-data cp -R ./dist/* /srv/www/soucher/app/'
                echo 'Done'
            }
        }
    }
}
