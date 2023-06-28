function mul(n){
    return n*mul(n-1);
}
console/log(mul(5))