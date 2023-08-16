const express = require("express");
const app = express();
const PORT = 5000;

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});


const fileupload = require("express-fileupload");

app.use(fileupload());

app.use(express.static("upload_image"));

const send_to_api = require("./send_to_api");

app.post("/upload_file", (req, res) => {
  console.log(req.body.color_to_api);

  console.log(req.files);

  const newpath = __dirname + "/upload_image/";
  const file = req.files.myFile;
  const now = new Date().getTime();

  const filename = now + file.name;

  file.mv(`${newpath}${filename}`, (err) => {
    try {
      (async () => {
        await send_to_api(
          `${newpath}${filename}`,
          filename,
          req.body.color_to_api
        );
        res.status(200).send({ imageName: filename, code: 200 });
      })();
    } catch (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
  });
});

app.listen(PORT, () => {
  console.log("running test", PORT);
});