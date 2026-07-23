const sum=[2,3,4,34,45];
const evenSum=[2,4,6,8,10];
const oddSum=[1,3,5,7,9,11];



function isSum(numbers){
    console.log("Inside number ",numbers);
    let sum=0;
    
    for(let num of numbers){

        // console.log(num)
        sum=sum+num;

    }
    return sum;

}
const isSume=isSum(sum);
console.log("The totle sum is = ", isSume);
const isEven=isSum(evenSum);
console.log("The totle even sum = ", isEven);
const isOdd=isSum(oddSum);
console.log("The odd sum is = ",isOdd)