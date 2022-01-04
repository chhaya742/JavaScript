cons=read=require("prompt-sync")
let prompt=read()
let str=prompt("enter string :-")
s=''
for (i=str.length-1;i>=0;i--)
{
s+=str[i]
}
if (str==s)
{
    console.log('palindrom')
}
else {
    console.log('not a palindrome')
}
// console.log(s)