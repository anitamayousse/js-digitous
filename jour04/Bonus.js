const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function generatePassword(num){
    if (num < 6 || num > 15) {
        return null;
    } else{
        let password = "";
        for (let i=0; i< num; i++) {
            const index = Math.floor(Math.random()* alphabet.length);
            password += alphabet[index];
        }
        return password;
    }
}

console.log(generatePassword(8));
