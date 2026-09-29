// let n=10
// while(n<=20){
//     console.log(n);
//     if(n===14){
//         break
//     }
//      n=n+1
// }

// write the code to display the first divisible of 5 in the tange of 21 and 32
// for(let j=21;j<=32;j++){
        // let i=j
//     if(i%5==0){
//         console.log(i);
//         break;
//     }
// }

// write the code to display the last divisible of 3 in the range of 1 to 10

// for(j=10;j>=1;j--){
//     i=j
//     if(i%3==0){
//            console.log(i);
//         break
//     }
 
    
// }

// write the code to display the first three numbers in given range
// count=0
// for(i=3;i<=15;i++){
//     count++
//      console.log(i);
//     if(count==3){
       
//         break;
        
//     }
//  }


// write thr code to display the last even digit from given number
// let n=514369

// while(n!=0){
//     let id=n%10
//     if(id%2==0){
        
//         console.log(id);
        
//         break
//     }
//     n=parseInt(n/10)
// }

// write the code to display the first digit which is less than 3 from the right side from the given number
// let n=1924016
// while(n!=0){
//     let id=n%10;
//     if(id<3){
//         console.log(id);
//         break;
//     }
//     n=parseInt(n/10)
// }

// -----------------------------------------------------------------------------------------------------------------------------
  // for(let i=11;i<=20;i++){
  //   if(i==13){
  //       continue;
        
        
  //   }
  //   console.log(i);
  // }

  // write the code to skip the unlucky year from 2015 to 2026
  // for(let i=2015;i<=2026;i++){
  //   if(i==2020){
  //     continue;
  //   }
  //   console.log(i);
    
  // }

  // write the logic to skip the even numbers in the range os 1 to 10
  // for(i=1;i<=10;i++){
  //   if(i%2==0){
  //     continue;
  //   }
  //   console.log(i);
    
  // }

  
  // write the logic to skip 3 in the range of 1 to 5 by using while loop
  // n=1
  // while(n<=5){
  //   if(n==3){
  //     continue;
  //   }
  //   console.log(n);
  //   n++
  // }

  // skip odd digit in the given number
  let n=123456
  while(n!=0){
    id=n%10

    if(id%2!=0){
  n=parseInt(n/10)
      
      continue;
    }
   console.log(id);
   n=parseInt(n/10)
     
  }
  