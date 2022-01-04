var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
odd=0
odd_sum=0
even=0
even_sum=0
for (i of elements){
    if (i%2==0)
    {
        even+=1
        even_sum+=i

    }
    else{
        odd+=1
        odd_sum+=i
    }
}
console.log("sum of even ",even_sum)
console.log("count of even ",even)
console.log('avarage of sum of even',even_sum/even)

console.log("sum of even ",odd_sum)
console.log("sum of even ",odd)
console.log('avarage of sum of even',odd_sum/odd)

console.log('avarage of sum of even',odd_sum+even_sum/odd+even)