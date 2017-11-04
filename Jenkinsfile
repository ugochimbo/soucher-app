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
                sh 'sudo -u www-data cp -R ./asset /srv/www/soucher/app'
                sh 'sudo -u www-data cp -R ./vendor /srv/www/soucher/app'
                sh 'sudo -u www-data cp favicon.ico /srv/www/soucher/app'
                sh "sudo -u www-data sed -i -e 's/soucher.dev/api.soucher.com/g' /srv/www/soucher/app/index_bundle.js"
                echo 'Done'
            }
        }
    }
}
