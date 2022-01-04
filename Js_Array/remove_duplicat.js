var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
c=[]
for (i of n){
    if (! c.includes(i))
    {
        c.push(i)
        
    }

}
// console.log(c)
for (j of n){
    k=0
    count=0
    for (i of n){
        if (j==i){
            count+=1
            n.splice(i,1)
            // console.log(n);

        }
    k+=1
    
    }
    
}
console.log(n);

