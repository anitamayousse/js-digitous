/*01 - Comptons*/
let i = 50; 
while (i <=200){
    if (i % 2 ==0) {
      console.log(i);
    }
    i++
  }
/*02 - Try again*/

let dice = null;
let count = 0;
while (dice !== 6 && dice<=6){
  dice = Math.floor(Math.random()* 6)+1;{
    console.log(dice);
  }
  count++
}
console.log([count]);

/*03 - Course*/
let ussainBolt = 0;
let tysonGay = 0;
let ussainBoltTotal = 0;
let tysonGayTotal = 0;

while (ussainBoltTotal <= 100 && tysonGayTotal <=100) {
    ussainBolt = Math.floor(Math.random() * 10) + 1;
    tysonGay = Math.floor(Math.random() * 10) + 1;

    ussainBoltTotal +=  ussainBolt;
    tysonGayTotal += tysonGay;
}

if (ussainBoltTotal > tysonGayTotal) {
  console.log(`Ussain Bolt ${ussainBoltTotal} has won Tyson Gay ${tysonGayTotal}`);

} else if (ussainBoltTotal = tysonGayTotal){
  console.log(`Ussain Bolt ${ussainBoltTotal} equals  Tyson Gay ${tysonGayTotal}`);

} else {
  console.log(`Ussain Bolt ${ussainBoltTotal} has lost Tyson Gay ${tysonGayTotal}`);
}
console.log(`Total score of Ussain Bolt is ${ussainBoltTotal}`);
console.log(`Total score of Tyson Gay is ${tysonGayTotal}`);

/*04 - Des boites
5
2
5
-8
*/
/*05 - Encore des boites
0
7
*/
