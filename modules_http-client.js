// If module http is used, the default por is 80 and the protocol is http
// If module https is used, the default por is 443 and the protocol is https
import { get } from "node:https";

const myURL = {
  hostname: "letrasnubladas.com",
  port: 443,
  path: "/about/"
};

get(myURL, (res) => {
  console.log(`The response to ${myURL.hostname} is ${res.statusCode} and ${res.statusMessage}`);
}).on("error", (err) => {
  console.error(err);
});
