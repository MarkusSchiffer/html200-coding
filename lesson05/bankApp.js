let balance = 0;

do {
  usr = prompt('Please select a command:\nEnter Q to quit\nEnter W to ' +
               'withdraw\nEnter D to deposit\nEnter B to view your balance');
  switch (true) {
    case usr.toLowerCase() === 'q':
      break;
    case usr.toLowerCase() === 'w':
      amt = prompt('How much would you like to withdraw?')
      newTotal = Number(amt);
      if (Number.isNaN(newTotal)) {
        alert('Please enter a real number.');
        break;
      }
      newTotal = balance - amt;
      if (newTotal < 300) {
        if (newTotal < 0) {
          alert('Your account balance cannot go below $0.00');
        } else {
          usr = prompt('Your account balance will be beneath $300.00. ' +
                       'Are you sure you want continue? (Enter Y or N)');
          if (usr.toLowerCase() === 'y') {
            balance = newTotal;
          }
        }
      } else {
        balance = newTotal;
      }
      break;
    case usr.toLowerCase() === 'd':
      amt = prompt('How much would you like to deposit?')
      newTotal = Number(amt);
      if (Number.isNaN(newTotal)) {
        alert('Please enter a real number.');
        break;
      }
      newTotal += balance;
      if (newTotal > 50000) {
        alert('This account cannot have a balance greater than $50,000.00.');
      } else {
        balance = newTotal;
      }
      break;
    case usr.toLowerCase() === 'b':
      alert('Your balance is ' + balance);
      break;
    default:
      alert('Please select one of the options shown.');
  }
}
while (usr.toLowerCase() !== 'q');
