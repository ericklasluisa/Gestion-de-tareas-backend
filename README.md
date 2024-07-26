<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripción

Proyecto de Backend para ofrecer una API RESTful que maneje la autenticación de la aplicación de gestión de tareas y maneje las operaciones CRUD de gestión de tareas.

## Instalación

```bash
npm install
```

## Iniciar la base de datos con docker

```bash
#descargar imagen mysql
docker pull mysql

#Crear contenedor docker
docker run --name G7-Evaluacion-DB -p 3306:3306 -e MYSQL_ROOT_PASSWORD=12345 -d mysql

#Entrar a MySQL desde docker
docker exec -it G7-Evaluacion-DB mysql -p

#Crear Database en MySQL
create database GestionTareasDB
```

## Ejecutar la aplicación

```bash
npm run start:dev
```

## Integrantes del Grupo
* Erick Lasluisa
* Francisco Quiroga
* Ariel Rivadeneira
* Augusto Salazar