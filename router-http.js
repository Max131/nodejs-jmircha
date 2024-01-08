// Mini router app
import { createServer } from "node:http";

const routeHome = (res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    data: {
      message: "You are in home",
      status: 200,
      ok: true
    }
  }, null, 2));
};

const routeAbout = (res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });

  res.end("<h1>There is not place like About</h1>");
};

const route404 = (res) => {
  res.writeHead(404, {
    "Content-Type": "text/plain"
  });

  res.end("Oh no, theres is nothing here!");
};

const server = createServer((req, res) => {
  switch (req.url) {
    case "/":
      routeHome(res);
      break;
    case "/about":
      routeAbout(res)
      break;
    default:
      route404(res)
  }
});

server.listen(8000, "localhost", () => {
  console.log("Listening on: http://localhost:8000");
});
