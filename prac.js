function rollnumber(num,delay,nextroll) {
    setTimeout(()=>{
        console.log("Roll Number is:",num);
        if(nextroll) nextroll();
    },delay);
}
rollnumber(12121,1000,()=> {
    rollnubner(12121,2000, () =>{
        rollnubner(12312,3000, () =>{
            rollnubner(12412,4000);
        });
    });
});

let promise1 = function getPromise() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            console.log("Roll. No. is",num);
            resolve("Successfully Done");
        }delay);
    });
}
getRoll(1,1000).then(() => {
    getRoll(2,2000).then(() =>{
        getRoll(3,3000);
    });
}); 