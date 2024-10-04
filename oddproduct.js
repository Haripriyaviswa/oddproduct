let m=3;
let n=9;
if(m>n){
    console.log("1");
    
}
else{
    let pro=1;
    for(let i=m;i<=n;i++){
        if(i%2!=0){
        pro=pro*i;
        }
    }
    console.log(pro);
    
