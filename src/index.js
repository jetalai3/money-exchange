// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }else if(currency<=0){
        return {};
    }
    let h, q, d, n, p, rest;
    h = Math.trunc(currency/50);
    rest = currency - h*50;
    q = Math.trunc(rest/25);
    rest = rest - q*25;
    d = Math.trunc(rest/10);
    rest = rest - d*10;
    n = Math.trunc(rest/5);
    rest = rest - d*5;
    p = currency - h*50 - q*25 - d*10 - n*5;
    let result = {};
    if(h>0){
        result.H = h;
    }
    if(q>0){
        result.Q = q;
    }
    if(d>0){
        result.D = d;
    }
    if(n>0){
        result.N = n;
    }
    if(p>0){
        result.P = p;
    }
    return result;
}
