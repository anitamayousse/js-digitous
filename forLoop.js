/*01 - Somme des carrés*/
function SquareandSum(num) {

    var sum = 0;
    for (var i = 0, x = num.length; i <x; i++) {
      sum += num[i] * num[i];
    }
    console.log(sum);
    return sum;
  }

SquareandSum([5,6,7,8,9,10])
/*02 - Comptons*/
let total = 100;
let limit = 1000;
  for (let i=100; i<limit; i++){
    if(i % 7 === 0 ){
      console.log(i);
    }
}
/*03 - Chanceux*/
let i;
for (let i=0; i<20; i++){
  val = Math.floor(Math.random()*6+1);
  if(val >= 5); {
    console.log(val);
  }
}

/*04 - Des boites*/
10
34
17
30
14
/*05 - Des setiob*/
12
24
33
39
42
0
/*06 - Encore des boites*/
0
3
-3
2
-2
5
-4