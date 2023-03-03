const http = require("http");
const getCharByid = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

http
  .createServer((req, res) => {
    //Para que no se rompa cuando conectamos con el front.
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("onsearch")) {
      let id = req.url.split("/").at(-1);

      getCharByid(res, id);
    }
    if (req.url.includes("detail")) {
      let id = req.url.split("/").at(-1);

      getCharDetail(res, id);
    }
  })
  .listen(3001, "localhost");
