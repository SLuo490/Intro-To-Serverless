const fetch = require("node-fetch");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  async function getCatPic() {
    let resp = await fetch(
      "https://bit-cat.azurewebsites.net/cat/says/serverless",
      {
        method: "GET",
      }
    );

    // we need to receive it as a buffer since this is an image we are receiving from the API
    let data = await resp.arrayBuffer();

    //data will be encoded in base64.
    var base64data = Buffer.from(data).toString("base64");

    return base64data;
  }

  function getNames() {
    var names = [
      "Shreya",
      "Emily",
      "Fifi",
      "Beau",
      "Evelyn",
      "Julia",
      "Daniel",
      "Fardeen",
    ];

    var randomValue = Math.floor(names.length * Math.random());
    var resultName = names[randomValue];
    return resultName;
  }

  var firstCat = await getCatPic();
  var secondCat = await getCatPic();
  var name1 = getNames();
  var name2 = getNames();

  context.res = {
    body: {
      cat1: firstCat,
      cat2: secondCat,
      names: [name1, name2],
    },
  };
};
