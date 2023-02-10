var express = require('express');
const { Register, Login, test, admin } = require('../controllers/user.controllers');
const passport = require('passport');
const { ROLES, isRole } = require('../security/Rolemiddleware');
const { FindAllProfile, DeleteProfile, AddProfile, GetProfile, findSingleProfile } = require('../controllers/profiles.controllers');
var router = express.Router();

/* GET home page. */
router.post('/register', Register);
router.post('/login', Login);

// Profiles admin 
// addProfile 
router.post('/profile', passport.authenticate('jwt', {session: false}), AddProfile )

//find All profile
router.get('/profiles', passport.authenticate('jwt', {session: false}),isRole(ROLES.ADMIN), FindAllProfile )

// get single Profile
router.get('/profile', passport.authenticate('jwt', {session: false}),isRole(ROLES.USER, ROLES.ADMIN), findSingleProfile )

//delete profile
router.delete('/profile/:id', passport.authenticate('jwt', {session: false}),isRole(ROLES.USER, ROLES.ADMIN), DeleteProfile )


module.exports = router;
