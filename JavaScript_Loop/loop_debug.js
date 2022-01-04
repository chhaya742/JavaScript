const result = {
    success: ["max-length", "no-amd" ,"prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
    };
    
    const success=result.success
    // const store=success.length
    for(const value in result)
    { 
        // console.log(result[value])
    
        for (var i in value)
        {
            console.log(value[i]);
    }
    }