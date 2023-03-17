# Docker cheatsheet

*Build a image

````npm
    docker build -t image-name
````

## Run a container

````npm
    docker run -d -p 4000:4000 --name container-name image-name
````

### Get to Container terminal

````npm
    docker exec -it node-app bash
````

#### Delete Container

````npm
    docker rm container-name -f
````

#### Use Bind volumes to sync local folder to Container folder

````npm
    docker run -d -v $(pwd):/app -p 4000:4000 --name container-name image-name
````
