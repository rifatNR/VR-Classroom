const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const path = require("path");
const connectDB = require("./Database/MongoConnect");
require("dotenv").config();

const app = express();
app.use(cors());
connectDB();
app.use(express.json({ extended: false }));

// app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

const corsOpts = {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
};

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
    },
});

const sockets = new Set();
function sendAll(src, name, data) {
    sockets.forEach((socket) => {
        try {
            if (socket !== src) {
                socket.emit(name, { self: false, data });
            } else {
                socket.emit(name, { self: true, data });
            }
        } catch (error) {
            console.error(error);
        }
    });
}
io.on("connection", (socket) => {
    console.log("New client connected");
    sockets.add(socket);

    socket.emit("me", socket.id);

    socket.on("voice-chat-join", (roomId, userId) => {
        socket.join(roomId);
        // socket.to(roomId).broadcast.emit("user-connected", userId);
        sendAll(socket, "user-connected", userId);

        socket.on("disconnect", () => {
            // socket.to(roomId).broadcast.emit("user-disconnected", userId);
            sendAll(socket, "user-disconnected", userId);
        });
    });

    socket.on("disconnect", () => {
        console.log("Client Disconnected.");
    });

    // FIXME: Remove socketIO testing
    socket.on("test-text", (data) => {
        sendAll(socket, "test-text", data);
    });

    socket.on("mousePos", (data) => {
        sendAll(socket, "mousePos", data);
    });

    socket.on("lineData", (data) => {
        sendAll(socket, "lineData", data);
    });

    socket.on("clear-whiteboard", (data) => {
        sendAll(socket, "clear-whiteboard", data);
    });

    socket.on("disconnect", () => {
        sockets.delete(socket);
    });
});

app.get("/", (req, res) => res.send("🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆"));
app.use("/api/login", require("./Procedures/Authentication/Login"));
app.use("/api/signup", require("./Procedures/Authentication/Signup"));
app.use("/api/classroom", require("./Procedures/Classroom/Classroom"));
app.use("/api/upload/ppt-image", require("./Procedures/Upload/PPT_Image"));

const PORT = process.env.PORT || 4000;
server.listen(PORT, () =>
    console.log(`Server running on port ${PORT} | http://localhost:${PORT}`)
);
