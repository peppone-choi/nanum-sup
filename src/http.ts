// import "./asyncSync";
// import "./eventEmitter";
// import "./promise";

import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  if (req.url === "/") {
    res.end(JSON.stringify({ message: "Hello, 모두연구소!" }));
  }

  if (req.url?.startsWith("/users")) {
    switch (req.method?.toLowerCase()) {
      case "get": {
        res.end(
          JSON.stringify({
            users: [
              {
                name: "김모두",
                age: 30,
              },
              {
                name: "이모두",
                age: 28,
              },
            ],
          })
        );
        break;
      }

      case "post": {
        res.end(JSON.stringify({ message: "User created" }));
        break;
      }

      case "put": {
        res.end(JSON.stringify({ message: "User updated" }));
        break;
      }

      case "patch": {
        res.end(JSON.stringify({ message: "User patched" }));
        break;
      }

      case "delete": {
        res.end(JSON.stringify({ message: "User deleted" }));
        break;
      }
    }
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
