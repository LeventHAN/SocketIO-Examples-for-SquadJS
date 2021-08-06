// This guide is prepared for socketIO users that don't know how to use it for SquadJS.
// I know this is NOT user friendly way of explaining stuff and I promise I will write a UI version of this. Soon™
// I will put more and more examples of this soon. So please, don't be afraid to ask me questions from our Discord server (SquadJS's Discord Server).

// STAP 1
// Require / Import the package: "socket.io-client"
const io = require("socket.io-client"); // Load the socket.io client

// STAP 2
// Declare the IP, PORT and password/token for the socketIO connection
// Must be the same as in SquadJS
const ip = "My_IP_Addres_here"; // The IP address where SquadJS is active/installed.
const port = "7777"; // The port for socket.IO
const token = "VeryStrongSexyPassword123"; // Password for socket.IO

// STAP 3
// Make the socketio connection to an IP address and port
const socket = io.connect("ws://" + ip + ":" + port, {
	auth: {
		token: token,
	},
});

socket.on("connect_error", (err) => {
	return console.error(err);
});

console.log(">>>> SocketIO has no issues at the configuration phase.");

// STAP 4
// Use the socket.io client to emit an event or catch an event
// Below I will write the syntax of the usage and will put some working/tested realtime scenarios

// ***************************************************
// ** LISTENING TO A BROADCASTED EVENT FROM SQUADJS **
// ***************************************************

/** I will end up using only 2 diffrent events, which is the chat message event (CHAT_MESSAGE) and the admin braodcast event (ADMIN_BROADCAST).
 * But you can check out the full List of broadcasted events at this link; https://github.com/Thomas-Smyth/SquadJS/blob/e8b4118add3a51704b9f7f26001da61058ec67c0/squad-server/plugins/socket-io-api.js#L6 .
 */

/** Example code for listening to an event.
 *
 * <code>
 *  socket.on("", () => {
 *      // do something
 *  };
 * </code>.
 */

// EXAMPLE 1
// When players write something on the chat
socket.on("CHAT_MESSAGE", (message_content) => {
	console.log("Someone did write something. The content is as following;");
	console.log(message_content);
});

//EXAMPLE 2
// When there is a broadcast sended by admins
socket.on("ADMIN_BROADCAST", (message_content) => {
	console.log("Broadcast message appeared.");
	console.log(message_content);
});

// ****************************************
// ** SENDING A EVENT/COMMAND TO SQUADJS **
// ****************************************

/** Example code for emitting an event.
 *
 * <code>
 *  socket.emit("", () => {
 *      // do something
 *  };
 * </code>.
 */

/** I will end up using only one event, which is the players list event (players).
 * But you can check out the full List of broadcasted events at this link; https://github.com/Thomas-Smyth/SquadJS/blob/dd9a403e6b79c6673b103a2395d8681faa271984/squad-server/rcon.js .
 */

// EXAMPLE 1
// When "players" event is emitted to the socketIO server (SquadJS) it will RETURN you a response and you can catch it like this.
socket.emit("players", (playerList) => {
	const amountPlayers = playerList.length;
	console.log("The server has now", amountPlayers, "players.");
	// or just check it yourself in table version :)
	// console.table(playerList);
});

// EXAMPLE 2
// Same as above, what you also could do is using the direct RCON command for it;
socket.emit("rcon.getListPlayers", (playerList) => {
	const amountPlayers = playerList.length;
	console.log("The server has now", amountPlayers, "players.");
	// or just check it yourself in table version :)
	// console.table(playerList);
});

// EXAMPLE 3
// Sending a broadcast message to the server via socketIO, but this time there is no return object from the server;
socket.emit(
	"rcon.broadcast",
	"[TEST] This broadcast message is not important.",
	() => {
		// do some stuff when sended (for example logging or whatsoever...)
	}
);
