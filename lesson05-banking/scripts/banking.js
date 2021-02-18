function callTransType() {

    let balance = 500;
    let balanceLimit = 50000;
    let transaction = true;
    let completeDeposit = 0;

    while (transaction != 'Q') {
        const transType = prompt('What type of Transaction would you like?, Select W to Widthdraw, Select D to Deposit, Select B for Account Balance, Select Q to Quit')
        let toDo = transType.toUpperCase();
        switch (toDo) {
            case 'W':
                console.log(transType);
                const totalWithdraw = prompt('How much would you like to withdraw?');
                alert('Total to withdraw: ' + '$' + totalWithdraw);
                newBalance = balance - totalWithdraw;
                alert('Your balance today is: ' + '$' + newBalance);
                if (newBalance < 0) {
                    alert("Your asking for more than Account Balance.")
                } else if (newBalance < 300) {
                    alert("Are you sure you want to continue?")
                    alert("Warning, your balance is now less $300.00");
                }
                toDo = prompt('What type of Transaction would you like?, Select W to Widthdraw, Select D to Deposit, Select B for Account Balance, Select Q to Quit')
            case 'D':
                console.log(transType);
                const totalDeposit = prompt('How much would you like to deposit?');
                alert('Total deposit amount: ' + '$' + totalDeposit);
                let amountDeposited = Number(totalDeposit);
                completeDeposit = amountDeposited + balance;
                if (completeDeposit <= balanceLimit) {
                    console.log(amountDeposited);
                    balance = balance + amountDeposited;
                    alert('Your balance today is: ' + '$' + balance);
                } else {
                    (totalDeposit + balance > balanceLimit);
                    alert('Your total balance exceeds what is permitted.');
                }
                toDo = prompt('What type of Transaction would you like?, Select W to Widthdraw, Select D to Deposit, Select B for Account Balance, Select Q to Quit')
            case 'B':
                console.log(transType);
                alert("Your balance today is: " + '$' + balance);
                toDo = prompt('What type of Transaction would you like?, Select W to Widthdraw, Select D to Deposit, Select B for Account Balance, Select Q to Quit')
            default:
                console.log(transType);
                alert('Quit Transition Completed');
                break;
        }
        break;
    }
    console.log('Transaction Complete')
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