
outerfun=(a)=>{
    let b=10;
    innerfun=()=>{
        return b+a
    }
    console.log(innerfun())
}
outerfun(5)