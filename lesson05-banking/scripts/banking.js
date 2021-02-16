function callTransType() {
    const transType = prompt('What type of Transaction would you like?, Select W to Widthdraw, Select D to Deposit, Select B for Account Balance, Select Q to Quit')

    let balance = 500;

    switch (transType) {
        case 'W': {
            const totalWithdraw = prompt('How much would you like to withdraw?');
            console.log('Total to withdraw: ' + totalWithdraw);
            balance = balance - totalWithdraw;
            console.log('Your balance today is: ' + balance);
            if (balance < 300)
                alert("Warning, your balnce is less than $300.00");
            break;
        }
        case 'D': {
            const totalDeposit = prompt('How much would you like to deposit?');
            console.log('Total deposit amount: ' = totalDeposit);
            if (totalDeposit + balance <= 50, 000) {
                let amountDeposited = Number(totalDeposit);
                console.log(amount);
                balance = balance + amountDeposited;
                console.log('Your balance today is: ' + balance);
                break;
            } else {
                (totalDeposit + balance > 50, 000);
                console.log('Your total balance exceeds what is permitted.');
                break;
            }
        }
        case 'B': {
            console.log("Your balance today is: " + balance);
            break;
        }
        default: {
            alert('Quit Transition Completed');
            break;
        }
    }








//Deposit
//Account Balance
//Transaction Complete
//Quit

//prompt user for type of transaction
//   W = Withdraw
//   D = Deposit
//   B = Balance
//   Q = Quit

//Enter W for Withdraw
//Once W is selected user is prompted to enter amount
//    user enters amount $$
//    User selects enter, button
//    Withdraw complete
//prompts user for type of transaction "Would you like a another Transaction"? 
//    User selects transaction type
//

//Enter D for Deposit
//Prompt for amount to desposit
//    user enters amount $$
//    User selects enter, button
//    Deposit complete
//prompts user for type of transaction "Would you like a another Transaction"? 
//    User selects transaction type

//Enter B for Balance
//Display total in account
//prompts user for type of transaction "Would you like a another Transaction"? 
//    User selects transaction type


//Program will loop until Quit is selected

//Extra Credit
//Cannot excessive withdrawals (no degative balances)
//  -- when withdrawls are < 4, I'm sorry you've reached you limit, 
//     please come back tomorrow or visit a bank near you. 
//Deposit cap at $50,000.00
//  -- when balance is > 50,000.00, I'm sorry were unable to process your transaction 
//     please visit a bank near you. 
//Balance below ? presents dialog, alert balance is below $100.00
//  -- if balance is =< 100.00, send alert that balance is 100.00 or less.
//Alert when withdrawal would put them below $300.00
//  -- when withdrawal places account balance =< 300 alert of balance
