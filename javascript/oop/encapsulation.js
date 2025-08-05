class BankAccount {
  #balance; //Private property

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) { 
    this.#balance += amount;
    console.log(`Deposited: $${amount}`);
  }

  getBalance() {
    console.log(`Current balance: $${this.#balance}`);
  }
}

const deeqaAccount = new BankAccount(100);
deeqaAccount.deposit(50);
deeqaAccount.getBalance(); //output: Current balance: $150

const hannanAccount = new BankAccount(20);
hannanAccount.deposit(30);
hannanAccount.getBalance(); //output: Current balance: $50
// hannanAccount.#balance()
//account.balance: //Error: Private field
//encapsulation allows you make things private
