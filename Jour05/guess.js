const prompt = require("prompt");
prompt.start();
const mysteryNum = Math.floor(Math.random()* 100) + 1;

function play () {
    prompt.get(
    {name: "numUser", description: "Quel est le nombre mystére?"},
    function (err, res) {
        const numUser = parseInt(res.numUser);
        if (numUser === mysteryNum) {
            console.log("Bravo");
        } else if (numUser > mysteryNum) {
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