const skatespot = require("../models/skatespot");

function create(req, res) {
    skatespot.findById(req.params.id, function(err, skatespor) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        skatespot.reviews.push(req.body);
        skatespot.save(function(err) {
            res.redirect(`/skatespots/${skatespot._id}`);
        });
    });
}

function deleteReview(req, res, next) {
    Movie.findOne({'reviews._id': req.params.id, 'reviews.user: req.user._id'}).then(function(skatespot) {
        if (!skatespot) return res.redirect('/skatespots');
        skatespot.reviews.remove(req.params.id);
        skatespot.save().then(function() {
            res.redirect(`/skatespots/${skatespot._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}