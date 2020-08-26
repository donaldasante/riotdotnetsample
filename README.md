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
$ dotnet new install riot.dotnet --nuget-source https://api.nuget.org/v3/index.json 
```
- The following output is shown
![Output of dot net new command](images/pic1.png?raw=true "Output of dot net new command")

- To create a new project based off the template. Type dotnet new riot -n {ProjectName}. 
```bash
$ dotnet new riot -n Demo
```

## Running the demo project
- Open the demo project in Visual Studio. 
- Click on the green run button.
- Assuming all the requirements are met visual studio will
  1. build the dot net core app.
  2. Run npm install
  3. Start the application
- By default the webpack devserver runs on port 8080 (http://localhost:8080) and the application runs on port 5001 (https://localhost:5001)
- By default kestrel is the preferred webserver but you can use IIS and IIS Express.
- If you are using IIS Express make sure to configue the PROXY_TARGET environment variable in /ClientApp/package.json to match the iisExpress application url settings in launchSettings.json.

  

