function nishant() {
    const path = require("path");
    const express = require("express");
    const multer = require('multer');
    const { localsName } = require("ejs");
    const app = express();
    const port = 5000;
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            return cb(null, "../uploads")
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg')
        }
    })
    const upload = multer({ storage: storage })
    app.set("view engine", "ejs");
    app.engine('ejs', require('ejs').__express);
    // app.set("views", path.resolve("./views"));
    app.use(express.urlencoded({ extended: false }));
    app.get("/", (req, res) => {
        return res.render("homepage");
    });
    app.post("/upload", upload.single("profileImage"), (req, res) => {
        console.log(req.body);
        console.log(req.file);
        return res.redirect("/");
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}