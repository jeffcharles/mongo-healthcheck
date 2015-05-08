# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 27017, host: 27017

  config.vm.provision "docker" do |d|
    d.pull_images "mongo:2.6.7"
  end

  # Vagrant doesn't update Docker containers after their configuration changes
  config.vm.provision "shell",
    inline: "if [[ $(docker ps -aq) ]]; then docker rm -f $(docker ps -aq); fi"

  config.vm.provision "docker" do |d|
    d.run "mongo:2.6.7", args: "--name mongo --net=host"
  end

  # Vagrant doesn't autostart Docker containers
  config.vm.provision :shell, run: :always,
    inline: "if [[ $(docker ps -aq) ]]; then docker start $(docker ps -aq); fi"
end
