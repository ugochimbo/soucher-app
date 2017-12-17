pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
                sh 'npm run build'
                echo 'Compiling sass...'
                sh 'sass asset/sass/main.scss asset/css/main.css'
                echo 'Done'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'sudo -u www-data rm -rf /srv/www/soucher/app/*'
                sh 'sudo -u www-data cp ./dist/* /srv/www/soucher/app'
                sh 'sudo -u www-data mkdir /srv/www/soucher/app/asset'
                sh 'sudo -u www-data cp -R ./asset/css /srv/www/soucher/app/asset'
                sh 'sudo -u www-data cp -R ./asset/fonts /srv/www/soucher/app/asset'
                sh 'sudo -u www-data cp -R ./asset/js /srv/www/soucher/app/asset'
                sh 'sudo -u www-data cp -R ./vendor /srv/www/soucher/app'
                sh 'sudo -u www-data cp favicon.ico /srv/www/soucher/app'
                sh "sudo -u www-data sed -i -e 's@http://soucher.test@https://api.soucher.com@g' /srv/www/soucher/app/index_bundle.js"
                echo 'Done'
            }
        }
    }
}
