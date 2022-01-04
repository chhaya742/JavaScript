function add_numbers_list(list1,list2){
    sum=0
    for(i in list1){
        sum=list1[i]+list2[i]
        console.log(sum);
        console.log("------------");
    }
    
}
add_numbers_list([1,2,3,4,5],[6,7,8,9,10]);