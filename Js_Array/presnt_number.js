var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
elements=[]
for(var i of list1){
if (!list2.includes(i)){
elements.push(i)
}
}
console.log(elements);
elements1=[]
for(var i  of list2){
    if (! list1.includes(i))
    {
        elements1.push(i)
    }
}
console.log(elements1)

