function isGreaterThan20(num){
    if(num>20){
    return true
    }
    }
    function islessThan20(num){
        if(num<20){
        return true
        }
        }
function students(list1)
{count=0
    count1=0
    for (i of list1){
        result=isGreaterThan20(i)
        if(result==true){
            count+=1
        }
    else{
        result1=islessThan20(i)
        count1+=1
    }}
console.log("greater then 20 is:-",count,"\nless then 20 is :-",count1);
}
students([67,45,89,23,45,12,17,18,30,45,31,90,12,34,27,56,63,10,20,15]);