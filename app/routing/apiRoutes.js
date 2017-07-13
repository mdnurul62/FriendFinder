//Dependencies
var friendsData = require('../data/friends.js');
var path = require('path');


module.exports = function(app) {

    var newFriendData = [];

    app.get('/api/friends', function(req, res){
        res.json(friendsData);
    });


        app.post('/api/friends', function(req, res){
        
        var compatibilityArr = [];
        for(var i = 0; i < friendsData.length; i++){

            var diffArr = [];

            for(var j = 0; j < friendsData[i].scores.length; j++){
                var diffScores = Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
                diffArr.push(diffScores);
                     
            }

            function add(a, b){
                return a + b;
            };


           diffScores = diffArr.reduce(add, 0);


            compatibilityArr.push({
                    name: friendsData[i].name,
                    photo: friendsData[i].photo,
                    scores: diffScores
            });

        }

            var minValue = Math.min(compatibilityArr[0].scores, compatibilityArr[1].scores, compatibilityArr[2].scores);

            if(minValue == compatibilityArr[0].scores){
                res.json(compatibilityArr[0]);
            }
            else if(minValue == compatibilityArr[1].scores){
                res.json(compatibilityArr[1]);
            }
            else if(minValue == compatibilityArr[2].scores){
                res.json(compatibilityArr[2]);
            }

    })
};