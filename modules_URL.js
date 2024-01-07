import { URL, format } from "url";

const myURL = "https://example.com";
const parsedURL = new URL(myURL);

const urlOBJ = {
  protocol: "https",
  hostname: "loremipsum.io",
  pathname: "/example",
  query: {
    search: "sit amet",
    date: "240101"
  }
};
const newURL = format(urlOBJ);

console.log(parsedURL);
console.log(newURL);
