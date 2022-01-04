function check_numbers_list (list1,list2){
    for(i in list1){
        if(list1[i]%2==0 && list2[i]%2==0){
            console.log("dono even hai")
            console.log("---------------");

        }else{
            console.log("dono even  nahi hai")
            console.log("---------------");
    
        }
    }
}
console.log(check_numbers_list([2,2,3,4,5,5],[6,5,4,3,2,1]));
