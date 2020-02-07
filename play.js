const fetchData = (callback) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('done')
        }, 1500)
    })
    setTimeout(() => {
        callback('done')
    }, 1500);
    return promise;
};


setTimeout(()=> {
    console.log('time is done');
    fetchData().then(text => {
        console.log(text)
    })
}, 2000);

console.log('hello')

