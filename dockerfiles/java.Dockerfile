FROM java:9
WORKDIR /code
RUN javac Main.java
CMD ["java", "Main"]