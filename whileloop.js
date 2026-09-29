// display the digits in given number in reverse order
// let n =3425
// while(n!=0){
//     let id=n%10;
//     console.log(id);
//     n=parseInt(n/10);
//     console.log(n)
    
// }


// count the digit in given number
// let n =1652
// count=0
// while(n!=0){
//     let id =n%10
//     count=count+1
//     n=parseInt(n/10)
// }
// console.log(count);



// find the sum of digits in given number
// let n =1652
// sum=0
// while(n!=0){
//     let id =n%10
//     sum=sum+id
//     n=parseInt(n/10)
// }
// console.log(sum);


// to reverse the number
// let n =1652
// rev=0
// while(n!=0){
//     let id =n%10
//   rev=rev*10+id
//     n=parseInt(n/10)
// }
// console.log(rev);

//write the given number is palindrome or not

// let n=121
// let newnum=n
// rev=0
// while(n!=0){
//     let id =n%10
//   rev=rev*10+id
//     n=parseInt(n/10)
// }
// if(rev == newnum){
//     console.log("palindrome");
    
// }else{
//     console.log("not a palindrome")
// }

// while loop with conditional statement
// count and check the odd digite
// let n=123
// count=0
// while(n!=0){
//     let id=n%10
//     if(id%2!=0){
//         count=count+1
//     }
//     n=parseInt(n/10)
// } 
// console.log(count);


// display the largest digit from given number
let n=231
min=9
while(n!=0){
    let id=n%10
    if(id<min){
        
        min=id
        
    }
    n=parseInt(n/10)
}
 console.log(min);