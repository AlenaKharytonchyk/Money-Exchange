// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    }
    if (currency <= 0) {
        return {};
    }
    var hRate = 50;
    var qRate = 25;
    var dRate = 10;
    var nRate = 5;
    var pRate = 1;

    var moneyLeft = 0;
    var result = {};

    var H = Math.floor(currency / hRate);
    moneyLeft = currency % hRate;
    if (H >= 1) {
        result["H"] = H;
    }
    var Q = Math.floor(moneyLeft / qRate);
    moneyLeft = moneyLeft % qRate;
    if (Q >= 1) {
        result["Q"] = Q;
    }
    var D = Math.floor(moneyLeft / dRate);
    moneyLeft = moneyLeft % dRate;
    if (D >= 1) {
        result["D"] = D;
    }
    var N = Math.floor(moneyLeft / nRate);
    moneyLeft = moneyLeft % nRate;
    if (N >= 1) {
        result["N"] = N;
    }
    var P = Math.floor(moneyLeft / pRate);
    if (P >= 1) {
        result["P"] = P;
    }
return result;
}
