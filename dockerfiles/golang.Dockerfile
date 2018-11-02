FROM golang:1.11

WORKDIR /code


RUN go get -d -v ./...
RUN go install -v ./...

CMD ["app"]