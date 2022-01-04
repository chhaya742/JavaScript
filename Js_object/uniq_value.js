list1=[ {"first":"1"}, {"second": "2"}, {"third": "1"}, {"four": "5"}, {"five":"5"}, {"six":"9"}, {"seven":"7"} ]
list21=[]
for (i in list1){
    // console.log(list1[i]);
    for (j in list1[i]){
        // console.log(list1[i][j]);
        if(!list21.includes(list1[i][j])){
            list21.push(list1[i][j])

        }
    }
}
console.log(list21);