import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(req);
  const json = {
    data: {
      title: "Example",
      text: "Lorem ipsum dolor sit amet"
    }
  };

  res.writeHead(200, {
    // "Content-Type": "text/plain; charset=utf-8"
    // "Content-Type": "text/html; charset=utf-8"
    "Content-Type": "application/json"
  });

  // res.end("Hello, World!");
  // res.end("<h1>Hello World!</h1>");
  res.end(JSON.stringify(json));
});

server.listen(8000, "localhost", () => {
  console.log("Listening on http://localhost:8000");
});
