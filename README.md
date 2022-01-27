# Riot js 4.0 and dotnet core web api starter template
This is a dot net core 3.1 web api backend with a [riot js v4.xx](https://riot.js.org/) frontend SPA template. It uses the 
[VueCliMiddleware](https://github.com/EEParker/aspnetcore-vueclimiddleware) module to add riot cli support to a dot net core project.

## Requirements
- [Visual Studio 2019 Community](https://visualstudio.microsoft.com/vs/whatsnew/) .
- [dot net core 3.1](https://dotnet.microsoft.com/download/dotnet-core/3.1) if it doesn't already come bundled with Visual Studio 2019.
- [node js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm) which is normally bundled with nodejs.

## Installation
- Open your favorite CLS (Command Line Shell).
- Navigate to your chosen installation folder.
- Enter the command to install the latest riot.dotnet template on your local PC
```bash
$ dotnet new --install riot.dotnet.three --nuget-source https://api.nuget.org/v3/index.json 
```
- The following output is shown
![Output of dot net new command](images/pic2.png?raw=true "Output of dot net new command")

- To create a new project based off the template. Type dotnet new riot-dotnet31 -n {ProjectName}. 
```bash
$ dotnet new riot-dotnet31 -n Demo
```

## Running the demo project
- Open the demo project in Visual Studio. 
- Click on the green run button.
- Assuming all the requirements are met visual studio will
  1. Build the dot net core app.
  2. Run npm install
  3. Start the application
  
## Running demo application in docker
- Make sure you have docker desktop (Win, Mac, Linux) installed.
- Open CLS 
- Goto riot application install folder containing Dockerfile.
- To create a new docker image. Type docker build -t {img-name}. This command will read the Dockerfile and create a dotnet core/ riot SPA ready to run image.
```bash
$ docker build -t demo-riot-web-api-img .
```
- To run the newly created image. Type docker run -d -p {host-port}:{container-port} --name {container-name} {img-name}
```bash 
docker run -d -p 5000:80 --name demo-riot-dotnet-ui demo-riot-web-api-img
```
- Open any browser and goto http://localhost:5000. If the host port is not 5000 then use the port configured in the previous command.