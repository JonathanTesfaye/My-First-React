const http = require("http");

const server = http.createServer(function (req, res) {
	if (req.url == "/") {
		res.write | "hi";
	}
});
server.listen(5000, function () {
	console.log("Server has started");
});
