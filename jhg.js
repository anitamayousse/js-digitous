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