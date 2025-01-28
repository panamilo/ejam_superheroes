var express = require('express');
var router = express.Router();

var superheroes = [];

router.get('/superheroes', function(req, res) {
    try {
        console.log('Fetching your superhero list...');
        superheroes.sort((a, b) => b.humility - a.humility);
        res.status(200).json(superheroes);
    } catch (error) {
        res.status(400).send('Error: The list of superheroes could not be retrieved.');
    }
});

router.post('/superheroes', function(req, res) {
    try {
        console.log('You are adding the following superhero to the list!');
        var superHeroName = req.body.name;
        var superHeroPower = req.body.superpower;
        var superHeroHumility = req.body.humility;
        if(!superHeroName || !superHeroPower || superHeroHumility < 1 || superHeroHumility > 10 || isNaN(superHeroHumility)) {
            console.log('Oops it seems your hero is missing some information!');
            res.status(400).send('Error: All fields are required and humility must be between 1 and 10.');
            return;
        }
        console.log(req.body);
        superheroes.push(req.body);
        res.status(200).send('New superhero is successfully added to the list!');
    } catch (error) {
        res.status(400).send('Error: The superhero could not be added.');
    }
});

module.exports = router;