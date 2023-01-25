const Skatespot = require('../models/skatespot');

module.exports = {
    index,
    show,
    new: newSkatespot,
    create,
    delete: deleteSkatespot,
   
};

function index(req, res) {
    Skatespot.find({}, function (err,skatespots) {
        res.render("skatespots/index", { title: "All Skatespots", skatespots});
    });
}

function show(req, res) {
    res.render('skatespots/show', {
        skatespot: Skatespot.findById(req.params.id),
    });
}

function newSkatespot(req, res) {
    res.render('skatespots/new');
}

function create(req, res) {
    const skatespot = new Skatespot(req.body);
    skatespot.save(function(err) {
        if (err) return res.redirect('/skatespots/new');
        console.log(skatespot)
        res.redirect('/skatespots/new')
    })
    // skatespot.save(function (err) {
    //     if (err) return res.redirect("/skatespots/new");
    //     console.log(skatespot);
    //     res.redirect(`/skatespots/${skatespot._id}`);
    // });
};

function deleteSkatespot(req, res) {
    Skatespot.findById(req.params.id, function (err, skatespot) {
        if(!skatespot.user.equals(req.user._id)) res.redirect(`/skatespots/${req.params.id}`);
        if (err) {
            console.log("Theres an error", err);
        } else  {
            skatespot.remove(req.params.id);
        }
        res.redirect("/skatespots");
    })
}



