str="MISSISSIPPI"
// console.log(str.length);
arr=[]
dict1={}
for (i in str){
    // console.log(str[i]);
    if(! arr.includes(str[i])){
        arr.push(str[i] )
    }
}
// console.log(arr);
for( i in arr){
    count=0
    for(j in str){
        if(arr[i]==str[j])
        count+=1

    }
    console.log(arr[i],"=",count);
    dict1[arr[i]]=count
}
console.log(dict1);