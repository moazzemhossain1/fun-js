

// const evens=[];

// for(const num of numbers){
//     console.log(num);
//     if(num%2===0){
//         console.log("even =",num);
//         evens.push(num);
        
//     }
    
// }
// console.log(evens)




let  numbers=[12,13,16,18,21,23,26];


function isEven(arry){
    const evens=[];
    let sum=0;
    // console.log(arry)
    for(let num of arry){
        // console.log(num)
        if(num%2===0){
            // console.log("even =",num)
            sum=sum+num;
            evens.push(num);
        }
    }
    return {
        evenNumbe:evens,
        totleSume:sum,

    }

    
}
const result=isEven(numbers);
console.log(result);
// isEven(sum)
// isEven(evens)

