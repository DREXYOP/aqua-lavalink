## install jabba and sht
echo Downloading Java 17...
curl -sL https://github.com/shyiko/jabba/raw/master/install.sh | bash -s -- --skip-rc && . ~/.jabba/jabba.sh
## get java 17
jabba install zulu@1.17.0-0
echo Java is installed.
java -version
npm i
echo Donwloading lavalink jar...
node index
