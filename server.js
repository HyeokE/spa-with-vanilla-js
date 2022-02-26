const express = require("express");
const path = require("path");

const app = express();

app.use("/routes", express.static(path.resolve( "src", "routes")));



app.get("/*", (req, res) => {
    res.sendFile(path.resolve("src", "index.html"));
});

app.listen(process.env.PORT || 3030, () => console.log("Server running..."));