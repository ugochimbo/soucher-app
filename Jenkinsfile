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
                sh 'sudo -u www-data rm -rf /srv/www/soucher/app/*'
                sh 'sudo -u www-data cp ./dist/* /srv/www/soucher/app'
                echo 'Done'
            }
        }
    }
}
