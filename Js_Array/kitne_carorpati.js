var kitna_paisa_hai = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
c=0
l=0
d=0
for(i of kitna_paisa_hai){
    if (i>=10000000 ){
        c+=1}
    else if(i>=100000){
        l+=1
    }
    else{
        d+=1
    }
}
console.log(c,"carorpati")
console.log(l,"lakhpati")
console.log(d,"dilwale")

