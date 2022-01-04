var number = 30
var n = [10, 11, 12, 13, 14, 17, 18, 19]
pair=[]
for(i of n){
    for(j of n)
    {
        if (i+j===number){
            pair.push([i,j])
        }
    }
}
console.log(pair)
