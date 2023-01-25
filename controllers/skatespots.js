const Skatespot = require('../models/skatespot');

module.exports = {
    index,
    show,
    new: newSkatespot,
    create,
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

function newSkatespot(req, res) {
    res.render('skatespots/new');
}

function create (req, res) {
    const skatespot = new Skatespot(req.body);
    skatespot.save
}