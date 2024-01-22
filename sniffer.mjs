import { createServer } from "node:http";
import { get } from "node:https";

const hostname = "localhost";
const port = 3000;
const options = {
  host: "letrasnubladas.com",
  port: 443,
  path: "/about"
};

let htmlCode = "";

const httpClient = res => {
  console.log(`The site ${options.host} has responed. Status code: ${res.statusCode}`);

  res.on("data", data => {
    htmlCode += data;
    console.log(htmlCode.toString());
  });
};

const httpError = err => {
  console.error(`The site has no response. Response code: ${err.code}\n
                  Message: ${err.message}`);
};

const webServer = (_, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type: text/html; charset=utf-8");
  res.end(htmlCode);
};

get(options, httpClient).on("error", httpError);

createServer(webServer).listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
