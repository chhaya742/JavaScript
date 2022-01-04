var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7,60]
max=0
var sec_max=1;
for (i of numbers){
    if (i>max)
    {
        sec_max=max
        max=i
    }
    else if (i>sec_max)
    {
        sec_max=i
    }
}console.log(sec_max)

