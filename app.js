const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

app.use("/", bodyParser());
app.use(express.static("src/public"));

let campgrounds = [
    {name: "Salmon creek", image:"https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
    {name: "Maas Mountain", image:"https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"},
    {name: "Happy Hippies", image:"https://farm3.staticflickr.com/2655/3738566424_180036be3f.jpg"}
];
    
app.get("/", (req, res) => {
    res.render("landing", {title: "Landing Page"});
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {title: 'Campgrounds', campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    console.log(image)
    let newCamp = {name: name, image: image}
    campgrounds.push(newCamp)
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new", {title: "Add a Campground"});
});

const listener = app.listen(process.env.PORT, process.env.ID, () => {
    console.log("The server has started on port " + listener.address().port);
});