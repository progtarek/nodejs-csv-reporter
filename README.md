# CSV Resolver

App buit to resolve multiple csv files.

## Directory Tree

├── input // Contains sample files
|-- sample.csv
├── output
├── index.js
├── utils.js
Dockerfile
docker-compose.yml

## Instructions

1. Add files in input folder.
2. Run app.
3. Locate output files in output folder.

## Get Started

App built on top of [Node.js](https://nodejs.org/), so if you have Node.js installed on your machine then you just need to run

```sh
node index.js
```

Docker also is supported

```sh
docker build .
docker-compose up --build app
```

> You might need to try the above commands with `sudo`

## License

MIT
