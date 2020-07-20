# tracer-spring-backen

Backend app of Tracer project.

Deployed on: http://ayakubovych.ddns.net

>First load lasts about 20-30 seconds due to the remoteness of the dns server for ddns.net

###Description

This program serves asynchronous requests from the 
[tracer-react-frontend](https://github.com/AYakubovych/tracer-react-frontend)

###Deployment

To run this you must have Maven and Java installed and use this commands
```shell script
    mvn clean install
    java -jar tracer-0.1.1-SNAPSHOT.jar
```

For testing purpose i use H2 database, but on deploying i using Postgres
