var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
odd_count=0
even_count=0
for(i of elements){
    if (i%2==0){
    // console.log(i,'even');
        even_count+=1}
    else {
        // console.log(i,'odd');
        odd_count+=1
        
    }
}
console.log(even_count,'are even');
console.log(odd_count,'are odd')