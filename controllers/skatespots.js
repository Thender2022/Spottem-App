const Skatespot = require('../models/skatespot');

module.exports = {
    index,
    show,
};

function index(req, res) {
    Skatespot.find({}, function (err,skatespots) {
        res.render("skatespots/index", { title: "All Skatespots", skatespots});
    });
}

function show(req, res) {
    res.render('skatespots/show', {
        skatespot: Skatespot.getOne(req.params.id),
    });
}