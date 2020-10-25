



class bankAccount {
  construction(){

    this.transaction = [] //holds transaction objects
  }
  /** 
   * deposits amount to account
  */
  charge(payee, amt){

  }
  /**
   * returns the current ballance
   */
  balance(){

  }
}

class transaction{

    description;
    amt;
    constructor(){
      //

    }
}

let account = new bankAccount("1234", "Mogar Destroyer")


//new account
account.balance() //0

//balance after deposit
account.deposit(100) //100
account.balance()

//cannot negative deposit
account.deposit(-100) 
account.balance()


// can charge to a vendor
account.charge("target", 50)
account.balance()

//cannot overcharge
account.charge("Diamond store", 1050)
account.balance()

//can do refunds
account.charge(-20)
account.balance()



