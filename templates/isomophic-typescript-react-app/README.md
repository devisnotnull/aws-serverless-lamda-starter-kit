
# Introduction

This is the react app for the new categorization engine, This is an true isomophic application.

Currently you will need to have a local instance of the categorization api running locally.

Please refer to the `ecom-product-api` package for more information

# Developing

You can run the isomorphic application locally with hot module reloading.

```
yarn install --production=false
```

And to start the application simple run

```
yarn start
```

This will firstly compile the server logic and them the client code. Wepack will listen for any changes and update the running instance. Currenrtly you will need to manually restart the application to apply the latest updates.

```
Starting type checking service...
Using 1 worker with 2048MB memory limit

✔ Server
  Compiled successfully in 6.45s
✔ Client
  Compiled successfully in 12.14s

✅ Listening on: localhost::
No type errors found
Version: typescript 3.8.3, eslint 6.8.0
Time: 8529ms
webpack built 912b04b83b5de9a911ed in 12159ms
```

You can then access the GUI via `http://localhost:3000`.

# Building production bundle locally

To start you will need to build the deployable bundle.

```
yarn install --production=false
```

Once you have installed all of the development dependencies you can build the final bundle.

```
yarn build 
# yarn build:client
# yarn build:server
```

Now you can purge all of the development dependencies, Install production level dependencies and start the application.

```
rm -Rf node_modules
yarn install --production=true
```

Now you can invoke the application server.

```
➜  ecom-product-gui git:(webpack) ✗ node dist/index.js
Warning: Please use `require("history").createMemoryHistory` instead of `require("history/createMemoryHistory")`. Support for the latter will be removed in the next major release.
✅ Listening on: localhost::3000
```

# Building production bundle with docker 

The application includes a pre-configured Dockerfile,

To start you will need to ensure that docker is running locally,

Then you need to run docker build in context of the current folder.

```
➜  ecom-product-gui git:(webpack) ✗ docker build .
Sending build context to Docker daemon  1.728MB
Step 1/8 : FROM node:12.10.0-stretch-slim
 ---> de16f9a8ad0f
Step 2/8 : WORKDIR /usr/src/app
 ---> Using cache
 ---> 827aa2b8bf07
Step 3/8 : COPY . .
 ---> 895400173a12
Step 4/8 : RUN npm install -g yarn
 ---> Running in 0b2a7a2c60d2
/usr/local/bin/yarnpkg -> /usr/local/lib/node_modules/yarn/bin/yarn.js
/usr/local/bin/yarn -> /usr/local/lib/node_modules/yarn/bin/yarn.js
+ yarn@1.22.4
added 1 package in 1.111s
Removing intermediate container 0b2a7a2c60d2
 ---> 1cf321a513e6
 ---> 5b235ec17d6a
Step 7/8 : EXPOSE 3000
 ---> Running in f18d33866ed1
Removing intermediate container f18d33866ed1
 ---> 586bd261c02e
Step 8/8 : CMD ["node", "dist/index.js"]
 ---> Running in 4e29406ad5b5
Removing intermediate container 4e29406ad5b5
 ---> 6cfdc830e5d0
Successfully built 6cfdc830e5d0
```

This will copy the package into a node container, Build the development bundle with development dependencies and then install production level dependencies.

Once the build has completed it will return a hash to identify the current build `Successfully built 6cfdc830e5d0`.

We will use this hash to tag the build, Tags allow us to namespace docker images and cleanily tag incremental versions.

```
docker tag 6cfdc830e5d0 pbx/relationship_engine:0.1
```

Now we should able to run our newly constructed container.

```
docker run -p 3000:3000 -d pbx/relationship_engine:0.1