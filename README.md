# 422-Final

## About this project
- This is a simple app that parses csv files and converts them to json files.
- Inputted files must be in ".csv" format.
- Outputted files are in ".json" format.
- Uses Node v22.15.0

## Dependencies
- Nodemon v3.1.10

## Building the project
- To run the application, execute `npm run dev`
- To build the application with Docker, execute `docker build -t repo-name -f Dockerfile .` Replace "repo-name" with a Docker Hub repository name.

## Using the app
- CSV files to be converted go into the "inbound" directory.
- JSON files that have been converted are in the "outbound" directory.
- CSV files that have been processed are in the "processed" directory.