const express = require('express');
const router = express.Router();
const {XUser} = require("unofficial-x-api");
const config = require("./config");

const twitterUser = new XUser({bearerToken: config.bearerToken, authToken: config.authToken, csrfToken: config.csrfToken});

router.get("/random/:query", async (req, res) => {
    console.log(req.params.query);
    if(!req.params.query || req.params.query.length < 1) return res.send("There is no query!");

    const results = await twitterUser.getListOfTweet(req.params.query)

    if(results.length < 1) return res.send("I got no tweets with this query");

    return res.send(results[Math.floor(Math.random() * results.length)].tweet.text);
});

module.exports = router;