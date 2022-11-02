let N=13
let fact=0
for(let i=1;i<=N;i++){
    if(N%i===0){
        fact++
    }
}
if(fact===2){
    console.log(N+" is prime number")
}else{
    console.log(N+" is not prime number")
}