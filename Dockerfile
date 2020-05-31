FROM openjdk:8-jdk-alpine
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} tracer-0.1.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/tracer-0.1.1-SNAPSHOT.jar"]