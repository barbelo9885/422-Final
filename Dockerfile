FROM ubuntu:latest

RUN mkdir /output
WORKDIR /output

ENTRYPOINT npm run dev