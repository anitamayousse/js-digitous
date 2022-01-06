const prompt = require("prompt");
prompt.start();
const mysteryNum = Math.floor(Math.random()* 100) + 1;

function play () {
    prompt.get(
    {name: "q", description: "Quel est le nombre mystére?"},
    function (err, res) {
        if (parseInt(res.numUser) === mysteryNum) {
            console.log("Bravo");
        } else if (res.numUser > mysteryNum) {
            console.log("c'est moins");
            play();
        } else {
            console.log("c'est plus");
        }
        play();
    }

    );
    
}

play();