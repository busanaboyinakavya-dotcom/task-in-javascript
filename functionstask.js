// function without input and without return(argument)

//   1. write a function to print your name, age, and city. age

// function name(){
//     let name = "hero";
//     let age ="22";
//     let city = "vizag";

//     console.log(name);
//     console.log(age);
//     console.log(city);
    
// }
// name()

// 2.  Write a function to print all even numbers from 1 to 10

// function even(){
//     for(i=1;i<=10;i++){
//         if(i%2==0){
//             console.log(i);
            
//         }
//     }
// }
// even()

// 3.  Write a function to print odd numbers from 10 to 1.
//  function odd(){
//     for(i=10;i>=1;i--){
//         if(i%2!=0){
//             console.log(i);
            
//         }
//     }
//  }
//  odd()

//  4. Write a function to print the multiplication table of 5
// function multiple(){
//     let n=5
//     for(i=1;i<=10;i++){
//         console.log(n,"X",i,"=",n*i);
        
//     }
// }
// multiple()

// 5. Write a function to print the first 10 natural numbe

// function natural(){
//     let n=1
//     while(n<=10){
//         console.log(n);
//           n=n+1
//     }
// }
// natural()

// 6. Write a function to check whether a number is even or odd.
// function evenodd(){
//     let n =1
//     while(n<=10){
//         if(n%2==0){
//             console.log(n,"even number");
            
//         }
//         else{
//             console.log(n,"odd number")
          
//         }
//        n=n+1
//     }
  
// }
// evenodd()

// 7. Write a function to check whether a number is positive, negative, or zero.

// function numbers(){
//     let n=0
//         if(n>0 ){
//             console.log(n,"positive number");
            
//         }
//         else if(n<0){
//             console.log(n,"negative number")
//         }
//         else{
//             console.log(n,"Zero")
//         }
//         }

//         numbers()

// 8. Write a function to find the largest of two numbers
// function largest(){
//     let n1=8;
// let n2=9;
// if(n1>n2){
//     console.log(n1,"largest number");
    
// }else{
//     console.log(n2,"largest number")
// }

// }
// largest()

// 9.  Write a function to calculate the sum of two numbers

// function sum(){
//     let sum=0;
// let n1=30;
// let n2=20;
// sum=n1+n2
// console.log(sum);

// }
// sum()

// 10. Write a function to calculate the difference of two numbers
// function differece(){
//     let sum=0;
// let n1=45;
// let n2=20;
// sum=n1-n2
// console.log(sum);

// }
// differece()

// 11. Write a function to calculate the area of a rectangle

//  function rectangle(){
//     let len=20;
//  let bre=30;
//  area = len*bre
//  console.log(area);
 

//  }

//  rectangle()

// 12. Write a function to print multiples of 5 from 1 to 50
// function multiple(){
//     for(i=1;i<=50;i++){
//     if(i%5==0){
//         console.log(i);
        
//     }
// }
// }
// multiple()
// 13. Write a function to find the sum of numbers from 1 to 10
// function sumnumbers(){
//     let sum=0 ;
// for(let i=1;i<=10;i++){
//     sum=sum+i;
//     console.log(sum);
    
// }
// }
// sumnumbers()


// 14. Write a function to find the factorial of a number

// function factor(){
//     let fact =1
// let n=5
// for(let i=1;i<=n;i++){
//     fact=fact*i;
   
    
// }
//  console.log(fact);
// }
// factor()

// 15. Write a function to count the even digits of a number.
// function count(){
//     let n=8934
// let count =0;
// while(n>0){
//     let digit =n%10;
//     if(digit %2==0){
//         count=count+1;
//     }
//     n=parseInt(n/10)
// }
// console.log(count);

// }

// count()
// ---------------------------------------------------------------------------------------
// function with input and without return

// 1. Write a function to check whether a number is even or odd

// function evenorodd(n){
//     if(n%2==0){
//         console.log(n,"even number");
        
//     }else{
//         console.log(n,"odd number")
//     }
// }
// evenorodd(8)

// 2. Write a function to find the square of a number
//   function square(n){
//     console.log(n**2);
    
//   }
//   square(6)

// 3.Write a function to find the cube of a number

// function cube(n){
//     console.log(n**3);
    
// }
// cube(9)

// 4. Write a function to calculate the sum of two numbers.
// function sumofnumbers(n1,n2){
//     console.log(n1+n2);
    
     
// }
// sumofnumbers(10,30)

// 5. Write a function to calculate the product of two numbers
//  function product(n1,n2){
//     console.log(n1*n2);
    
//  }
//  product(30,70)

// 6. Write a function to count the odd digits of a number
// function countodd(n1,n2){
//     let count=0
// for(i=n1;i<=n2;i++){
   
//   if(i%2!=0){
    
//         count=count+1
//   }
  
   
// }
// console.log(count);
// }
// countodd(1,10)

// 7.Write a function to find the smallest digit in a number
// function smallest(n1,n2){
//     if(n1<n2){
//         console.log(n1,"smallest number");
        
//     }
//     else{
//         console.log(n2,"smallest number")
//     }
// }
// smallest(4,1)

// 8. Write a function to reverse a number
// function reverse(n1,n2){
//     for(i=n1;i>=n2;i--){
//         console.log(i);
        
//     }
// }
// reverse(10,1)

// 9. Write a function to check whether a number is prime

// function prime(n){
//     let count =0;
//     for(i=1;i<=n;i++){
//         if(n%i==0){
//         count=count+1;
//         }
//     }

// if(count==2){
//     console.log(n,"is a prime number");
    
// }else{
//     console.log(n,"not a prime number")
// }
// }
// prime(4)

// 10.Write a function to calculate the average of N numbers
// function avg(n){

// let sum=0
// for(let i=1;i<=n;i++){
//     sum=sum+i
// }
// console.log(sum/n);
// }
// avg(5)

// 11.Write a function to check whether a number is a palindrome.
// function palindrome(n){
//     let original = n;
//     let result =0;
//     while(n>0){
//         let digit = n%10;
//         result=result*10+digit;
//         n=parseInt(n/10);
//     }
//     if(original == result){
//         console.log("palindrome");
        
//     }
//     else{
//         console.log("Not a palindrome")
    
//     }
// }
// palindrome(1331)

// 12.Write a function to calculate electricity bill based on units
//  function electricity(units){
//     let bill;
//     if(units<=100){
//         bill=units*1
//     }
//     else if(units<=200){
//         bill=(100*1)+((100*2))
//     }
//     else{
//         bill=(100*1)+(100*2)+((units-200)*3)
//     }
//     console.log(bill);
    
//  }
// electricity(250)

// 13.Write a function to check whether a year is a leap year
// let year=2020;
// if(year%4==0&&year%100||year%400==0){
//     console.log(year,"is a leap year");
    
// }else{
//     console.log(year,"not a leap year")
// }

// 14.write a function to check the  difference between even and odd
// function difference()
// let n=67683
// let even_sum=0;
// let odd_sum=0;
// while(n>0){
//     a=n%10
//     if(a%2==0){
//         even_sum=even_sum+a
        
       
//     }else{
//         odd_sum=odd_sum+a
    
//     }
//     n=parseInt(n/10)
// }
// console.log(even_sum-odd_sum);


// 15.Write a function to calculate the total and average marks of three subjects
//  function average(n1,n2,n3){
   
// let sum=n1+n2+n3
// console.log(sum/3);
//  }
//  average(30,50,40)

// ---------------------------------------------------------------------------------------------------------
// Function without input and with return
// 1. write the function to find factorial
// function factor(){
//     let n=5
//     fact=1
//     for(i=n;i>=n;i--){
//         fact=fact*i;
//     }
//     return fact
// }
// let factorial=factor()
// console.log(factorial);

// 2.count of digits in a number 9875624 
// function digit(){
// let n=9875624
// count=0
// while(n>0){
//     a=n%10
//     count=count+1
//     n=parseInt(n/10)

    
// }
// return(count);

// }
// let countnumber=digit()
// console.log(countnumber);

// 3.find even digits in a given number 8574263 
// function even(){
// let n=8574263
// while(n>0){
//     a=n%10
// if(a%2==0){
//     console.log(a,"is even nymber");
    
// }else{
//     console.log(a,"is odd number")
// }
// n=parseInt(n/10)
// }
// return a
// }
// let digit=even()
//     console.log(digit)

// 4.product of digits in given number 342 
// function digitnum(){
//  let n=342
//  let product=1
//  while(n>0){
//     digit=n%10
//     product=product*digit
//     n=parseInt(n/10)
//  }
//  return product
// }
// let number=digitnum()
// console.log(digitnum(number))

//  5.sum of odd digits in given number 8524163 
// function oddnum(){
// let n=8524163
// while(n>0){
//     digit=n%10
//     if(digit%2!=0){
//         console.log(digit,"is odd number");
        
//     }else{
//         console.log(digit,"ia even number")
//     }
//     n=parseInt(n/10)
    
// }
// return digit
// }
// let odddigit=oddnum()
// console.log(oddnum())
// ------------
// 6.Count numbers divisible by 5
// function num(){
//     let count=0
//     for(let i=1;i<=50;i++){
//         if(i%5==0){
//             count+=1
//         }
//     }
//     return count
// }
// let divisible=num()
// console.log(divisible)

//7.find the largest
// function largest(){
//     let a=10;
//     let b=20;
//     let c=30
//     if(a>b&&a>c){
//         return a+" is largest"
//     }
//     else if(b>a&&b>c){
//         return b+" is largest"
//     }
//     else{
//         return c+" is largest"
//     }
// }
// let value=largest()
// console.log(value)

//8. Find the smallest number
// function smallest(){
//     let a = 30
//     let b = 7
//     let c = 40
//     if(a<b&&a<c){
//         return a +" is small"
//     }
//     else if(b<a&&b<c){
//         return b+" is  small"
//     }
//     else{
//         return c+" is small"
//     }
// }
// let digit=small()
// console.log(digit)

// 9.factorial of 3
// function fact(){
//     let n=3
//     let fact=1
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     return fact+"  is the factorial of "+ n
// }
// let fraction=fact()
// console.log(fraction)

//10.powers
// function power(){
//     let base=2
//     let p=5
//     let result=1
//     for(let i=1;i<=p;i++){
//         result=result*base
//     }
//     return result
// }
// console.log(power())

// 11.Reverse a number
// function reverse(){
//     let a=123456
//     let rev=0
//     while(a!=0){
//         x=a%10
//         rev=rev*10+x
//         a=parseInt(a/10)
//         if(a==0){
//             break
//         }
//     }
//     return rev
// }
// console.log(reverse())

//12. sum of digits
// function digitsum(){
//     let a=98575
//     let sum=0
//     while(a!=0){
//         x=a%10
//         sum=sum+x
//         a=parseInt(a/10)
//         if(a==0){
//             break
//         }
//     }
//     return sum
// }
// console.log(digitsum())

//13.Check Prime Number
// function prime(){
//     let a=17
//     let count=0
//     for(let i=1;i<=a;i++){
//         if(a%i==0){
//             count++
//         }
//     }
//        if(count==2){
//         return a+"  Prime"
//     }
//     else{
//         return a+"  Not Prime"
//     }
// }
// let primenum=prime()
// console.log(primenum)

//14.skip multiples of 6 in range of 1 to 50


