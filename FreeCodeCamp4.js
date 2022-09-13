function checkCashRegister(price, cash, cid) {
    let rez = [];
    let sum = 0;
    function kasosSuma(a) {
        for (let i = 0; i < a.length; i++) {
            sum = sum + a[i][1];
        }
        return sum.toFixed(2);
    }

    sum = kasosSuma(cid);
    console.log(sum);

    let graza = parseFloat((cash - price).toFixed(2));

    if (sum < graza) {

        let change = {status: "INSUFFICIENT_FUNDS", change: []};
        console.log(change);
        return change;
    } else if (sum == graza) {

        let change = {status: "CLOSED", change: cid};
        console.log(change);
        return change;
    }

    let mas = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    // let mas = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    // let mas2 = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];

    // Cia reikia pataisyti. Reikia naudoti ne mano masyvus (virsuje), o tiesiog duota "cid".
    console.log(graza);
    for (let i = cid.length - 1; i >= 0; i--) {
        console.log('-----------');
        console.log(cid[i]);
        if (cid[i][1] > 0 && Math.floor(graza / mas[i]) > 0) {
            let laik = 0;
            laik = Math.floor(graza / mas[i]) * mas[i];
            console.log(cid[i]);
            if (laik > cid[i][1]) {
                rez.push([cid[i][0], cid[i][1]]);
                graza = (graza - cid[i][1]).toFixed(2);
            } else {
                rez.push([cid[i][0], laik]);
                graza = (graza - laik).toFixed(2);
            }
            
        }
        console.log(graza);
        console.log('-----------');
    }

    if (graza == 0) {
        let change = {status: "OPEN", change: rez};
        console.log(change);
        return change;
    } else {
        let change = {status: "INSUFFICIENT_FUNDS", change: []};
        console.log(change);
        return change;
    }

  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
  ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])