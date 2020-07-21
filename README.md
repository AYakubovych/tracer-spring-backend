# tracer-spring-backend

Backend app of Tracer project.

Deployed on: http://ayakubovych.ddns.net

>First load lasts about 20-30 seconds due to the remoteness of 
>the dns server for ddns.net

##Description

This program serves asynchronous requests from the 
[tracer-react-frontend](https://github.com/AYakubovych/tracer-react-frontend)

##Deployment

To run it you should have Maven and Java installed and use these commands
```shell script
    mvn clean install
    java -jar target/tracer-0.1.1-SNAPSHOT.jar
```

For testing purpose i use H2 database, but on deploying i using Postgres

##Other project parts

* [tracer-react-frontend](https://github.com/AYakubovych/tracer-react-frontend)
* [tracer-android-service](https://github.com/AYakubovych/tracer-android-service)
* [tracer-spring-mailing](https://github.com/AYakubovych/tracer-spring-mailing)