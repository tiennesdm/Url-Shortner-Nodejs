const UrlShorten = require("../../model/shotUrl");
const validUrl = require("valid-url");
const shortId =  require('short-id');
console.log('hello from controlller');
exports.postUrl = async(req, res, next) => {
    console.log('function is running');
    console.log(req.body);
    const { originalUrl  } = req.body;
    shortBaseUrl ='localhost:8080'
    if (validUrl.isUri(shortBaseUrl)) {
        console.log(shortBaseUrl);
    } else {
      return res
        .status(401)
        .json(
          "Invalid Base Url"
        );
    }
    const urlCode = shortId.generate();
    console.log('urlcode',urlCode);
    const updatedAt = new Date();
    if (validUrl.isUri(originalUrl)) {
      try {
        const item = await UrlShorten.findOne({ originalUrl: originalUrl });
        if (item) {
          res.status(200).json(item);
        } else {
          shortUrl = shortBaseUrl + "/" + urlCode;
          const item = new UrlShorten({
            originalUrl,
            shortUrl,
            urlCode,
            updatedAt
          });
          await item.save();
          res.status(200).json(item);
        }
      } catch (err) {
        res.status(401).json("Invalid");
      }
    } else {
      return res
        .status(401)
        .json(
          "Invalid Original Url"
        );
    }
};

exports.getUrl = async(req, res, next) => {
    console.log('get function is running');
    const urlCode = req.params.code;
    console.log(urlCode);
   const item = await UrlShorten.findOne({ urlCode: urlCode });
    if (item) {
        console.log(item);
      return res.redirect(item.originalUrl);
    } else {
      return res.redirect(errorUrl);
    }
};