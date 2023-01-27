const Skatespot = require('../models/skatespot');
const router = require('../routes/skatespots');

module.exports = {
    index,
    show,
    new: newSkatespot,
    create,
    delete: deleteSkatespot,
    edit,
    update
   
};

function index(req, res) {
    Skatespot.find({}, function (err,skatespots) {
        res.render("skatespots/index", { title: "All Skatespots", skatespots});
    });
}

function show(req, res) {
    Skatespot.findById(req.params.id, function(err, skatespot) {
        console.log(skatespot)
        res.render('skatespots/show', { title: "Skatespot Details", skatespot})
    });
}
    
function newSkatespot(req, res) {
    res.render('skatespots/new');
}

function create(req, res) {
    const skatespot = new Skatespot(req.body);
    console.log(req.body)
    skatespot.save(function(err) {
        if (err) return res.redirect('/skatespots/new');
        console.log(skatespot)
        res.redirect('/skatespots')
    })
    // skatespot.save(function (err) {
    //     if (err) return res.redirect("/skatespots/new");
    //     console.log(skatespot);
    //     res.redirect(`/skatespots/${skatespot._id}`);
    // });
};

function deleteSkatespot(req, res) {
    console.log("delete function entered")
    Skatespot.findById(req.params.id, function (err, skatespot) {
        // if(!skatespot.user.equals(req.user._id)) res.redirect(`/skatespots/${req.params.id}`);
        if (err) {
            console.log("Theres an error", err);
        } else  {
            skatespot.remove(req.params.id);
        }
        res.redirect("/skatespots");
    })
}

function edit(req, res) {
    Skatespot.findById(req.params.id, function(err, skatespot) {
        res.render('skatespots/edit', {
            title: 'Edit Skatespot',
            skatespot
        })
    })
}

function update(req, res) {
    Skatespot.findByIdAndUpdate(req.params.id, req.body, function(err, skatespot) {
        res.redirect("/skatespots");
    })
}


