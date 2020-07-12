# MuazamKamal API

<p align="center">
  <a href="https://github.com/muazamkamal/api/actions"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/muazamkamal/api/Deploy?style=flat-square"></a>
  <br>
  <img src="https://github.com/denolib/animated-deno-logo/raw/master/deno-rect-24fps.gif"></img>
  <br>
  <i>by <a href="https://hashrock.studio.design/" target="_blank">hashrock</a></i>
</p>

REST API with Deno for https://muazamkamal.com

## Setup

1. Clone this repository.

    `git clone https://github.com/muazamkamal/api.git`

2. Navigate to the root directory of the repository.

3. Run the api server as mentioned below.

### Running

`deno run --allow-net --allow-env --allow-read --allow-write --allow-plugin --unstable main.ts`

### Running (docker)

`docker build -t api-server .`

`docker run -it --init -p 3000:3000 api-server`

## Technologies

* [Deno](https://deno.land/)
  * [Oak](https://github.com/oakserver/oak)
* [MongoDB](https://github.com/manyuanrong/deno_mongo)
* [Yup](https://github.com/jquense/yup)
* TypeScript
* [Docker](https://www.docker.com/)
