let spendMoney = 0;

function goToParents(isWeekend){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (isWeekend) {
                spendMoney += 2000;
                resolve(spendMoney);
            } else {
                console.log('go to walk');
                reject('go to playground');
            }
        }, 800);
    })
}

function goToBusStation(spendMoney) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (spendMoney < 500) {
                console.log('go by public transport');
                reject('no money for taxi');
            } else {
                console.log('take taxi with babychair');
                spendMoney -= 100;
                resolve(spendMoney);
            }
        }, 500);
    });
}

function goToChervonograd(spendMoney){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (spendMoney < 200) {
                console.log('go by bla-bla car');
                reject('take places next to the driver');
            } else {
                console.log('go by public transport');
                spendMoney -= 250;
                resolve(spendMoney);
            }
        }, 2000);
    });
}

function buyPresentForKids(spendMoney){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (spendMoney < 400) {
                console.log('buy something sweet for kids');
                reject('buy something for Mark');
            } else {
                console.log('you can buy toys');
                spendMoney -= 300;
                resolve(spendMoney);
            }
        }, 600);
    });
}

function goToCenter(spendMoney){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (spendMoney < 500) {
                console.log('he can visit half of atraction');
                reject('he can drive several cars');
            } else {
                console.log('he can enjoy');
                spendMoney -= 550;
                resolve(spendMoney);
            }
        }, 2000);
    })
}

function returnToLviv(spendMoney) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(spendMoney<300){
                console.log('we us bus');
                reject('ask for places next to driver');
            }else{
                console.log('came to bus station in time ');
                spendMoney -= 400;
                resolve(spendMoney);
            }

        }, 1600);
    })
}

function returnHome(spendMoney) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (spendMoney < 150) {
                console.log('you can call taxi');
                reject('preare packages');
            } else {
                console.log('enjoy of public transport');
                spendMoney -= 160;
                resolve(spendMoney)
            }

        }, 600);
    });
}


// goToParents(true)
//     .then(balance => {
//         console.log('i took', balance, 'from pocket');
//
//         return goToBusStation(balance);
//     })
//     .then(balanceAfterTaxi => {
//         console.log('after using taxi my balance', balanceAfterTaxi);
//
//         return goToChervonograd(balanceAfterTaxi);
//     })
//     .then(balanceAfterBus => {
//         console.log('i have', balanceAfterBus, 'in my pocket');
//
//         return buyPresentForKids(balanceAfterBus);
//     })
//     .then(balanceAfterPresents => {
//         console.log('balance', balanceAfterPresents, 'in my pocket');
//
//         return goToCenter(balanceAfterPresents);
//     })
//     .then(balanceAfterCenter => {
//         console.log('balance', balanceAfterCenter, 'in my pocket');
//
//         return returnToLviv(balanceAfterCenter);
//     })
//     .then(balanceAfterReturn => {
//         console.log('balance', balanceAfterReturn, 'in my pocket');
//
//         return returnHome(balanceAfterReturn);
//     })
//     .then(balanceAfterReturnHome => {
//         console.log('balance', balanceAfterReturnHome, 'in my pocket');
//     })
//     .catch(reason => {
//         console.warn('its happend', reason)
//     })
//     .finally(() => {
//         console.log('we are at home!');
//     })


async function spendingTime(isWeekend){
    try {
        const balance = await goToParents(isWeekend);
        console.log(balance, 'balance')

        const balanceAfterTaxi = await goToBusStation(balance);
        console.log(balanceAfterTaxi, 'balanceAfterTaxi');

        const balanceAfterBus = await goToChervonograd(balanceAfterTaxi);
        console.log(balanceAfterBus, 'balanceAfterBus');

        const balanceAfterPresents = await buyPresentForKids(balanceAfterBus);
        console.log(balanceAfterPresents, 'balanceAfterPresents');

        const balanceAfterCenter = await goToCenter(balanceAfterPresents);
        console.log(balanceAfterCenter, 'balanceAfterCenter');

        const balanceAfterReturn = await returnToLviv(balanceAfterCenter);
        console.log(balanceAfterReturn, 'balanceAfterReturn');

        const balanceAfterReturnHome = await returnHome(balanceAfterReturn);
        console.log(balanceAfterReturnHome, 'balanceAfterReturnHome');

    }catch (e) {
        console.warn('its happend', e)
    }
}

spendingTime(true);
// spendingTime(false);

