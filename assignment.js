// print 1.100 using while dowhile and for
// print same 100.1 using while dowhile and for
// print odd number between 1.100
// print even number between 1.100
// print numbers between 1.100 which are divisible by 5 and 3
// print numbers between 1.100 which are divisible by 5 and 3 and 7



// print 1.100 using while dowhile and for
let a=1;

while(a<=100){
    console.log(a);
    a++;
}

console.log();

// print same 100.1 using while dowhile and for
let b=1;

do{
    console.log(b);
    b++;
}while(b<=100)

// print odd number between 1.100
console.log();

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// print even number between 1.100
console.log();

for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log();
// print numbers between 1.100 which are divisible by 5 and 3

for(i=1;i<=100;i++){
    if(i%5 == 0 && i%3 ==0){
        console.log(i);
    }
}

console.log();
//print numbers between 1.100 which are divisible by 5 and 3 and 7

for(i=1;i<=100;i++){
    if(i%5 == 0 && i%3 ==0 && i%7 == 0){
        console.log(i);
    }
}


 console.log();
 let x=1;

while(x<=100){
    console.log(x);
    x+=2;
}

