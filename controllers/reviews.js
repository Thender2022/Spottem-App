const Skatespot = require("../models/skatespot");


module.exports = {
    create,
    delete: deleteReview
}

function create(req, res) {
    Skatespot.findById(req.params.id, function(err, skatespot) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        console.log(skatespot.reviews)
        skatespot.reviews.push(req.body);
        console.log(skatespot.reviews)
        skatespot.save(function(err) {
            res.redirect(`/skatespots/${skatespot._id}`);
        });
    });
}

// function deleteReview(req, res, next) {
//     Skatespot.findOne({'reviews._id': req.params.id, 'reviews.user: req.user._id'}).then(function(skatespot) {
//         if (!skatespot) return res.redirect('/skatespots');
//         skatespot.reviews.remove(req.params.id);
//         skatespot.save().then(function() {
//             res.redirect(`/skatespots/${skatespot._id}`);
//         }).catch(function(err) {
//             return next(err);
//         });
//     });
// }

async function deleteReview(req, res, next) {
    try {
        const skatespot = await Skatespot.findOne({'reviews._id': req.params.id})
        if (!skatespot) return res.redirect('/skatespots')
        skatespot.reviews.remove(req.params.id)
        await skatespot.save()
        res.redirect(`/skatespots/${skatespot._id}`)
    } catch(err) {
        return next(err)
    }
}