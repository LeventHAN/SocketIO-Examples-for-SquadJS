# SocketIO Examples for SquadJS

With this short repo/guide I did try to show how you can use the socketIO connection with your SquadJS server.
<br><br>This repo will be updated from time to time with more examples and with a UI version of the guide.
<br><br>
The current guide is at the `main.js` file

Please ask all your questions at our Discord server;<br>
[![Discord](https://img.shields.io/discord/266210223406972928.svg?style=flat-square&logo=discord)](https://discord.gg/9F2Ng5C)



# WIP UI Guide


## Why use socketIO plugin?

SquadJS had needs of an API-like system. Therefor we made the plugin socketIO.

<q> Socket.IO is a library that enables real-time, bidirectional and event-based communication between the client and the server. </q>


**SocketIO is proven to be fast and reliable.**<br>
It also **reuses** the RCON connection that SquadJS already has made and can **simultaneously listen and broadcast to hundreds of clients**.


## Installation Guide

Before you can use socketIO-client to establish a connection with SquadJS server you need to have a working NodeJS project or you can clone this repo and build your project up on this. Also you might also check the pre-requirements before you start.

**Other Pre Requirements;**
- Node >=14.x
- SquadJS >=3.0.0
    - SquadJS/SocketIOAPI plugin to be enabled and configured

### Stap 1 - Installation

Installing the `socket.io-client` package.

- *Your own project*
    1. Open your terminal.
    2. Go to the root, or where the `package.json` file is located and run the following code;
    <pre><code>
        npm i socket.io-client
    </code></pre>
- *Using this project*
    1. Go to the root of this project and run the following code;
    <pre><code>npm i</code></pre>

### Stap 2 - Initialization

Importing/Requiring the package to the file/script.

- *Your own project*
    1. Make if not already exist a file and import/require the package so we can use it inside the file. If your project is using ES6 or TS please use the second import otherwise use the first one.
    <pre><code>
        // Importing
        // CommonJS (Used by this project)
        const io = require("socket.io-client);
        // ES6 import or TypeScript
        import { io } from "socket.io-client";
    </code></pre>

    2. Now lets configure it.
    <pre><code>
        // Configuring
        const socket = io.connect("ws://" + HERE_COMES_YOUR_IP + ":" + HERE_COMES_YOUR_PORT, {
            auth: {
                token: HERE_COMES_YOUR_SECRET_TOKEN,
            },
        });

        // You might want to add this too since it will throw error when there is one
        socket.on("connect_error", (err) => {
            return console.error(err);
        });
    </code></pre>
    * `HERE_COMES_YOUR_IP` - This is the IP address that SquadJS is installed on.
    * `HERE_COMES_YOUR_PORT` - This is the PORT that SquadJS/SocketIO-API plugin is configured to use.
    * `HERE_COMES_YOUR_SECRET_TOKEN` - This is the password / secret token SocketIO-API plugin is configured to use.

- *Using this project*
    1. This stap has already been completed in the `main.js` file. You only need to modify lines 16 to 18.

### Stap 3 - Usage / examples

** ON PROGRESS **







