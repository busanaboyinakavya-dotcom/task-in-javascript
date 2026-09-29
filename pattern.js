// for(let j=5;j>=1;j--){
//     let output="";
//     for(s=1;s<j;s++){
//         output+=" "   
//      }
//     for(i=5;i>=j;i--){
//        output=output+i;
//     }
//     console.log(output);
// }


// for(let j=1;j<=5;j++){
//     for(let i=1;i<=5;i++){
//         console.log(j,i)
//     }
// }

// write the code to print even number in the range 1 to 10
// for(let i=1;i<=10;i++){
//     let n=i;
//     if(n%2==0){
//         console.log(n);
        
//     }
// }


//display odd number in the range of 20 to 30
// for(let i=20;i<=30;i++){
//     let n=i;
//     if(n%2!=0){
//         console.log(n);
        
//     }
// }

//write the multiplication table for each number in the range(1 to 5)
// for(let j=1;j<=5;j++){
// for(let i=1;i<=10;i++){
//     let n=j
//     console.log(j,"X",i,"=",(j*i));
    
// }
// }
// print the factorial of each number in the range
// for(let j=1;j<=5;j++){
// let n=j;
// fact=1
// for(i=1;i<=n;i++){
//     fact=fact*i
    
// }
// console.log(fact);
// }
//print the prime numbers in the range of 1to 1000
// for(let j=1;j<=1000;j++){
// let n=j;
// let count=0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         count=count+1

//     }
//     if(count==2){
//         console.log(n);
        
//     }
// }
// }

let n=121;
let temp=n
let rev=0
while(temp!=0){
    id=temp%10
    rev=rev*10+id
    n=parseInt(temp/10)
}
if(rev==0){
    console.log("palindrome");
    
}else{
    console.log("not palindrome")
}
