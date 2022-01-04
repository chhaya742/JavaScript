marks = [ [78, 76, 94, 86, 88], [91, 71, 98, 65, 76], [95, 45, 78, 52, 49] ]
sum=0
for(i of marks){
    // console.log(i)
    for (j of i)
    {
        // console.log(j)
        sum+=j
    }
}
console.log(sum)