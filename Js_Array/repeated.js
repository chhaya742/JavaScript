var char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
list1=[]
for (i of char_list){
    if (!list1.includes(i))
    {
        list1.push(i)
    }
}
// console.log(list1)
for( j of list1){
    count=0
    for (k of char_list)
    {
        if (j==k)
        count+=1
    }
    console.log(j,count)
}