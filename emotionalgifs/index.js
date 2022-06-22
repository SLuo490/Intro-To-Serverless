const multipart = require("parse-multipart");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const boundary = multipart.getBoundary(req.headers["content-type"]);

  // assign the body variable the correct value
  const body = req.body;

  // parse the body
  const parts = multipart.Parse(body, boundary);

  // takes the buffer and the first data in parts and convert it to a string
  let convertedResult = Buffer.from(parts[0].data).toString("base64");

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: convertedResult,
  };
};
