const validateURL = (req, res, next) => {
    console.log(
      "This function checks the validity of the URL entered by the user"
    );
    const url = req.body.url;
    const validUrl = url.startsWith("http://") || url.startsWith("https://");
    // validUrl = /^https?:\/\//.test(url);
    
    if (validUrl) {
    return next();
    } else {
        res.status(400).send("Oops, you forgot to start your URL with http:// or https://");
    }
  };
  
  module.exports = { validateURL };