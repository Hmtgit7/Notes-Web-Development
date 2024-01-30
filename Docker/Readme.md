###### What is Docker? ######
1. Docker is a tool for running applications in an isolated Enviroment.
2. Similar to virtual machine.
3. App run in same enviroment.



Daemon: Daemon is responsible for creation of images.

docker run                             |                   To run docker and create image.
docker start                           |                   to start the container.
docker stop                            |                   to stop the container.
docker run -it < image name >          |   
docker 




the process of exposing the process running inside of the container is called porting.

docker run -it -p < Container PORT > : < LocalMachine PORT > < Image Name >