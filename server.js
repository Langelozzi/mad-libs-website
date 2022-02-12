var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
module.exports = router;

//renders the css as a static file
app.use(express.static(__dirname));

//sends my html page as response when root page is accessed
router.get('/', (req, res, err) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

//listens on port 80 and confirms the server starts in console
app.listen(80, () => {
    console.log("Server started on port 80");
})