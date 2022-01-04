
d1 = {'a': 100, 'b': 200, 'c':300,"a":300}
d2 = {'a': 300, 'b': 200, 'd':400,'e':100}
dict1={}
a={}
for (i in d1){
for(j in d2)
{
    if (i===j){
        a[i]=d1[j]+d2[j]
        break
        }
    else{
        dict1[i]=d1[i]
        dict1[j]=d2[j]
    }
    }    
}
for( i in a){
    dict1[i]=a[i]
}
console.log(dict1);
// console.log(a);





    

    
