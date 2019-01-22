const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport/localStrategy')

router.post('/signup', (req, res) => {
    console.log('user signup');

    const {name, email, password, aboutMe, jobPosition, location, phone, github, linkedin, avatar} = req.body
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err);
        } else if (user) {
            res.json({
                error: `Sorry, this email ${email} already used!`
            });
        }
        else {
            const newUser = new User({
                name: name,
                email: email,
                password: password,
                aboutMe: aboutMe, 
                jobPosition: jobPosition, 
                location: location, 
                phone: phone, 
                github: github, 
                linkedin: linkedin, 
                avatar: avatar
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser);
            })
        }
    })
})

router.post(
    '/login', 
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body);
        next();
    },
    passport.authenticate('local'), (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            aboutMe: req.user.aboutMe,
            jobPosition: req.user.jobPosition,
	        location: req.user.location,
	        phone: req.user.phone,
            github: req.user.github,
            linkedin: req.user.linkedin,
            avatar: req.user.avatar,
        };
        res.send(userInfo);
    }
)

router.get('/login', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.get('/logout', (req, res) => {
    console.log("logging out: ",req.user)
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router