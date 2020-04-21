const geocode=(addr, callback)=>{
    setTimeout(()=>{
        const data ={
            lat:0,
            long:0
        }
        callback(data) 
    },2000)
}

geocode('philadelphia',(data)=>{
    console.log(data)
})
