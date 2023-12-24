let timer = ()=>{
    let count =0;
    while(true){
        setTimeout(()=>{
            count++;
            console.log(count);
        },1000)
    }
}

timer();