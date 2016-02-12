#!/bin/bash

sudo apt-get update
sudo apt-get install -y apache2

if [ ! -h /var/www/html ]; then
  rm -rf /var/www/html
  ln -s /vagrant/expapp /var/www/html
  a2enmod rewrite
  sed -i '/AllowOverride None/c AllowOverride All' /etc/apache2/sites-available/000-default.conf
  service apache2 restart
fi
