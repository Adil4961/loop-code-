// ........FOR & WHILE LOOP & DO WHILE EXERCISE // ///////////


// 1. PRINT 1 TO 100
// for(i = 1;i<=100;i++)
// console.log(i);

// let i = 1;
// while(i <= 100){
//  console.log(i);
//  i++;
// }
//........................................................


// 2. PRINT ALL ODD NUMBERS 1 TO 100
// for(i = 1;i<100;i++)
// if(i%2===1)
// console.log("odd "+i);

// let i = 1;
// while(i<=100){
// if(i%2===1){
//  console.log("even" +i);
//  } i++;
// }
//..............................................


// 3. PRINT ALL EVEN NUMBERS 1 TO 100
// for(let i = 1;i<=100;i++)
// if(i%2===0)
// console.log("even " +i)

// let x = 1;
// while(x<=100){
//     if(x%2===1){
//         console.log("odd " +x)
//     }x++
// }
//..........................................................................


// 4. PRINT ALL NUMBERS WHICH DIVISIBLE AND MULTIPLE OF 5 IN 1 TO 100
// for(let i = 1;i<=100;i++)
// if(i%5===0)
// console.log(i)

// let i =1;
// while(i<=100){
//     if(i%5===0){
//         console.log("divisible of five "+ i)
//     }i++
// }(
//..........................................................................


// 5. PRINT ALL NUMBERS WHICH DIVIDSIBLE AND MULTIPLE OF 5 AND 15 IN 1 TO 100
// for(let i = 1;i<=100;i++)
// if(i%5===0&&i%15===0){
// console.log("5 & 15`s divisible "+ i);{
// }i++
// }

// let x = 1;
// while(x<=100){
//     if(x%5===0&&x%15===0){
//         console.log(x)
//     }x++
// }
//..........................................................................


// 6.  PRINT 2`S TABLE 
// for(let i = 1;i<=20;i++)
// if(i%2===0)
// console.log(i)

// let i = 1;
// while(i<=20){
//     if(i%2==0){
//         console.log(i)
//     }i++
// }
//..........................................................................


// 7. ASK USER A QUESTION " HOW MANY TIMES DO YOU WANTS TO PRINT HELLO WORLD?" AND THEN PRINT HELLO WORLD THAT NUMBER OF TIMES

// let user = Number(prompt("how many times do you want to print helloo world"))
// for(i = 1;i<=user;i++)
// console.log("hello world")

// let user = Number(prompt("how many times do you want to print hello world"))
// let i = 1;
// while(i<=user){
//     console.log("hello world");
//     i++;
// }
//..........................................................................


// 8. CALCULATE SUM OF ALL NUMBERS 1 TO 100
// let a = 0
// for(let i = 1;i <=100;i++){
//     a = a+i;{
// console.log(a)
//     }
// }console.log("answer " +a)

// let a = 0;
// let i = 1;
// while(i<=100){
//     a = a+i;{   
//     }i++
// }console.log(a)
//..........................................................................


// 9. CALCULATE SUM OF ALL ODD NUMBERS FROM 1 TO 100
// let a = 0
// for( let i = 1;i<=100;i++)
// if(i%2===1){
//     a = a+i
// }console.log("odd " +a)

// let a = 0;
// let i = 1;
// while(i<=100){
//     if(i%2===1);{
//         a =a+i;
//     }i++
// }console.log("even "+ a)
//..........................................................................


// 10 . CALCULATE SUM OF ALL EVEN NUUMBES FROM 1 TO 100
// let a = 0
// for(i = 1; i<=100;i++)
// if(i%2===0){
//     a= a+i;
// }console.log(a)

// let a = 0;
// let i = 1;
// while(i<=100){
//     if(i%2===0){
//         a = a+i;
//     }i++;
// }console.log(a)
//..........................................................................


// 11.PRINT 1,2,4,8,16,32,64..... UPTO 2048
// for(i = 1; i<=2048;i= i*2)
//     console.log(i)

// let i = 1;
// while(i<=2048){
//     console.log(i)
//     i*=2
// }
//..........................................................................


// 12. PRINT
// 1,2,3,4,5,6,7,8,9,10
// 11,12,13,14,15,16,17,18,19,20
// .
// .
// ......................99,100,
// for(i = 1; i<=100; i = i+1  ){
//     document.write(","+i);
//     if(i%10===0){
//         document.write("<br>")
//     }
//     }

// let i = 1;
// while(i<=100){
//     document.write(i)
// i++;
// if(i%10===0){
//     document.write("  <br>");
// }
// }

// for (let f = 1; f <= 100; f++) {
//     if (
//       f === 11 ||
//       f === 21 ||
//       f === 31 ||
//       f === 41 ||
//       f === 51 ||
//       f === 61 ||
//       f === 71 ||
//       f === 81 ||
//       f === 91
//     ) {
//       document.write("<br>");
//     }
//     document.write(f, " ");
//   }
//..........................................................................


// 13.PRINT 1 TO 100,BUT WITH SPECIFIC CONDITION. IF A NUMBER IS DIVISIBLE BY BOTH 3 AND 5, IT LOGS "FIZZBUZZ" TO CONSOLE INSTEAD OF THE NUMBER ITSELF.

// for(i = 1; i<= 100;i++)
// if(i%3===0&&i%5===0){
//     console.log(i+" fizzbuzz")}
// }else{
//     console.log(i)
// }

// let i = 1;
// while(i<=100){
// if(i%3===0&&i%5===0){
//     console.log(i +" fizzbuzz");
//     }  else {
//         console.log(i)
//     }i++;
// }
//..........................................................................


// 14. PRINT 10 TABLE LIKE THIS
// 2*1=2
// 2*2=4
// 2*3=6
// 2*4=8
// 2*5=10
// .
// .
// .
// 2*10=20

// let x = 10;
// for(i= 1;i<=10;i++)
// console.log(x+"*" + i+ "=" + x*i )

// let x = 20;
// let i = 1;
// while(i<=10){
//     console.log(x+"*"+i+"="+x*i);
//     i++
// }
//..........................................................................


// 15. RUN A LOOP 1 TO 100
// From 1 to 10 print "A"
// From 11 to 20 print "B"
// From 21 to 30 print "C"
// From 31 to 40 print "D"
// From 41 to 50 print "E"

// for(let i = 1;i <= 100; i++)
// if(i<=10){
//     console.log(i+" A");
// }else if(i<=20){
//     console.log(i+ " B");
// }else if(i<=30){
//     console.log(i+ " C");
// }else if(i<=40){
//     console.log(i+ " D");
// }else if(i<=50){
//     console.log(i+ " E");
// }else if(i<=60){
//     console.log(i+ " F");
// }else if(i<=70){
//     console.log(i+ " G");
// }else if(i<=80){
//     console.log(i+ " H");
// }else if(i<=90){
//     console.log(i+ " I");
// }else if(i<=100){
//     console.log(i+ " J");
// }

// let i = 1;
// while(i <=100){
//     if(i<=10){
//     console.log(i+" A");
// }else if(i<=20){
//     console.log(i+ " B");
// }else if(i<=30){
//     console.log(i+ " C");
// }else if(i<=40){
//     console.log(i+ " D");
// }else if(i<=50){
//     console.log(i+ " E");
// }else if(i<=60){
//     console.log(i+ " F");
// }else if(i<=70){
//     console.log(i+ " G");
// }else if(i<=80){
//     console.log(i+ " H");
// }else if(i<=90){
//     console.log(i+ " I");
// }else if(i<=100){
//     console.log(i+ " J");
// }i++;
// }
//..........................................................................


//  16 .RUN LOOP FROM 100 TO 1
// for(i = 100;i>=1;i--)
// console.log(i)

// let i = 100;
// while(i>=1){
// console.log(i);
// i--;
// }
//..........................................................................


// 17. PRINT BELOW SERIES
//   5 25 125.................TILL NUMBER IS LESS THAN EQUAL 10000
// for( i = 1;i <=10000;i= i*5)
//     console.log(i)

// i = 1;
// while(i<=10000){
// console.log(i);
//     i *=5;
// }
//..........................................................................


// 18 . PRINT BELOW SERIES 3,6,9,12..... TILL NUMBER IS LESS THAN EQUAL 500
// for( let i =3; i<=500;i+=3)
// console.log(i);

// let i = 3;
// while(i<=500){
//     console.log(i);
//     i+=3
// }
//................................................


// 19. PRINT BELOW SERIES
// 120
// 221
// 322
// 423
// 524
// 625
// 726
// 827
// 928
// 1029

// let b = 20
// for( let a = 1 ; b <=30 ,a <=10 ; a++, b++)
// console.log(a,b);

// let b = 20;
// while(a<10,b<30){
// console.log(a,b);
// a++,b++
// }
//.....................................................
 

// 20. PRINT BELOW SERIES 100 95 90 85 80 75 70 ...... TILL 0  
// for(i = 100; i>=0;i= i - 5)
// document.write(" "+i);
 
// let i = 100;
// while(i>=0){
// console.log(" "+ i);
// i=i-5;
// }
//...................................................


// 21. NUMBER 70 IS DIVISIBLE BY WHICH NUMBERS TILL 70 ? FIND OUT AND PRINT THOSE NUMBERS   
// for(a = 70;a>=0;a--)
// if(70% a ===0){
//     console.log(a);
// }

// let a = 70;
// while(a>=0){
// if(70%a===0){
//     document.write(" "+a);
//     console.log(a)
// }a--;
// }
//...........................................................................


//              .............WHILE LOOP EXERCISE............

// 1 . WRITE A WHILE LOOP THAT LOGS THE NUMBERS 1 TO 10 IN THE CONSOLE.
// let i = 1;
// while(i<=10){
// console.log(i);
// i++;
//}
//.............................................

// 2 . CALCULATE SUM OF ALL NUMBERS FROM 1  TO 100
//  let sum  = 0
// let i= 1;
// while(i<=100){
//     sum = sum +i;    
//     i++;
// }console.log(sum)
//...................................................

// 3 .COUNTING DOWN FROM 100 TO 1
// let i = 100;
// while(i>=1){
// console.log(i);
// i--;
// }
//..................................................

// 4 .PRINT 2`S TABLE 
// let i = 2;
// while(i<=20){
//     console.log(i);
//     i= i+2;
// }

// let i = 1;
// while(i<=20){
//     if(i%2===0){
//         console.log(i)
//     }i++;
// }
//........................................................ 

// 5 . CALCULATE SUM OF ALL ODD NUMBERS FROM 1  TO 100
//  let sum  = 0
// let i= 1;
// while(i<=100){
//     if(i%2===1){
//     sum = sum +i;    
//     }i++;
// }console.log(sum)
//..................................................................................


//        .............DO WHILE LOOP...............

// 1. WRITE A DO WHILE LOOP THAT LOGS THE NUMBERS 1 TO 5 IN THE CONSOLE
// let a = 1;
// do{
// console.log(a);
// a++;
// }while(a<=10);
//..............................................

// 2. COUNTING DOWN FROM 10 TO 1
// let a = 10;
// do{
//     console.log(a);
//     a--;
// }while(a>=1)
//..................................

//3. CALCULATE SUM OF ALL NUMBERS FROM 1 TO 100
// let i = 1;
// let a = 0;
// do{
//  a= a+i;
// i++;
// }while(i<=100);
// console.log(a);
//......................................................................................

// 4. PRINT 2`S TABLE 
// let i = 2;
// do{
//     console.log(i);
//     i+=2
// }while(i<=20)

// let i = 1;
// do{
//     if(i%2===0){
//         console.log(i);
//     }i++;
// }while(i<=20)
//..................................................................................................

// 5. ASK USER A QUESTION " HOW MANY TIMES DO YOU WANT TO PRINT HELLO WORLD?" AND THEN PRINT HELLO WORLD THAT NUMBER OF TIMES
// let user = Number(prompt("how many times do you want to print hello world"))
// let i = 1;
// do{
//     console.log("hello world")
// i++;
// }while(i<=user)
//.............................................................

// 6.  CALCULATE SUM OF ALL EVEN NUMBERS FROM  1 TO 100
// let i = 1;
// let a = 0;
// do{
//     a = a + i;
//     i++
// }while(i<=100);
// console.log(a);
