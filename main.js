//driving distance , mpg and tank size
// Create a Car class
// Properties are:
//  MPG        - miles per gallon
//  tankSize   - how big is the tank
//  curentFuel - the number of gallons the car currently has
//  odomoter   - number of total miles driven in this car
//  ID         - id of car in simulation

// constructior
//  pass in ID, MPG and tankSize
//  note current fuel

// have an addFuel(gallons) - gallons is how much fuel to add
//  this method should not let you "siphon" gas
//  this method should not let you overfill the tank

// have a distanceToEmpty()
//  this method should return the number of miles that the
//  car can go based on currentFuel and mpg

// have a drive(miles) - miles is = to driven miles
//  this should correctly reduce the current fuel based on miles 
//  passes and mpg


class Car {

  /**
   * 
   * @param {string} id - id of car
   * @param {number} tankSize - size of cars gas tank
   * @param {number} MPG - size of tank in gallons
   */

  constructor(id, tankSize, mpg){
    this.id = id;
    this.tankSize = tankSize;
    this.mpg = mpg;
    this.currentFuel = 0;
    this.odomoter = 0
  }
  /**
   * 
   * @param {number} gallons number of gallons to ADD to the car
   */
  addFuel(gallons){
    if(gallons < 0 ){
      console.log('no stealing gas!')
    return
    } else {
    if(gallons <= this.tankSize){
        this.currentFuel = gallons
        console.log('You added', gallons, 'gallons!')
    } else {
      this.currentFuel = this.tankSize
      console.log("You've overfilled the tank!")
    } 
   } 
  }

  // Optional addFuel ideas
  //   - let emptySpace = this.tankSize - this.currentFuel;
  //   - if(gallons >= emptySpace){
  //   - this.currentFuel = this.tankSize
  //   - else
  //   - this.currentFuel = this.currentFuel = gallons

  
  distanceToEmpty(){
    // have to use MPG and current fuel
    // console.log("You have", this.mpg * this.currentFuel, "miles left")
    return this.mpg * this.currentFuel;
   

  }
  /**
   * 
   * @param {number} miles - miles to drive
   */
  drive(miles) {
    //cannot drive negatives
    if(miles < 0){
      return
    }

    let maxDistance = this.distanceToEmpty();

    let distanceTraveled = maxDistance <miles ? maxDistance : miles;

    let fuelUsed = distanceTraveled/this.mpg;

    this.currentFuel = this.currentFuel - fuelUsed;
    this.odomoter = this.odomoter = distanceTraveled;



  }
  
}


let stingrayCorvette = new Car ("StingVette", 17, 15)
console.log(stingrayCorvette)
stingrayCorvette.addFuel(10)
console.log(stingrayCorvette)


console.log("Your distance to empty is ",stingrayCorvette.distanceToEmpty())










if( typeof describe == 'function'){
  const assert = require('assert');

  describe("constructor test", function(){
      it("shuld handle simple constructor", function(){

          let mazda = new Car("1234", 31, 13);
          assert.equal(mazda.id, "1234");
          assert.equal(mazda.mpg, 31);
          assert.equal(mazda.tankSize, 13);
          assert.equal(mazda.currentFuel, 0);
          assert.equal(mazda.odometer, 0);

      })
  })
 describe("Adding Fuel", function(){
   it("partially fill the tank", function(){
     let mazda = new car ("1243", 31, 13)
     mazda.addFuel(1)
     assert.equal(mazda.currentFuel, 1)
     
     mazda.addFuel(4)
     assert.equal(mazda.currentFuel, 5)
   })
   it("should not overfill", function(){
     let mazda = new car ("1243", 31, 13)
     mazda.addFuel(15)
     assert.equal(mazda.currentFuel, 13)

   })
   it("should not allow negative", function(){
    let mazda = new car ("1243", 31, 13)
    mazda.addFuel(10)
    mazda.addFuel(-3)
    assert.equal(mazda.currentFuel, 10)
    
  })
  it("should not overfill #2", function(){
    let mazda = new car ("1243", 31, 13)
    mazda.addFuel(10)
    mazda.addFuel(4)

    assert.equal(mazda.currentFuel, 13)

  })
  it("should allow filling to capacity incrementally", function(){
    let mazda = new car ("1243", 31, 13)
    mazda.addFuel(3)
    mazda.addFuel(2.5)
    mazda.addFuel(4.5)
    mazda.addFuel(1)
    mazda.addFuel(2)
    
    assert.equal(mazda.currentFuel, 13)

  })
  
 })
 
 describe("distance to empty", function(){
   it("when the car is full of gas", function(){
     let mazda = new car ('1243', 31, 12);
     mazda.addFuel(1)
     assert.equal(mazda.distanceToEmpty(), 31)
   })
   it("car has no gas", function(){
    let mazda = new car ('1243', 31, 12);
    mazda.addFuel(1)
    assert.equal(mazda.distanceToEmpty(), 0)
  })
  it("when the car is full of gas", function(){
    let mazda = new car ('1243', 31, 12);
    mazda.addFuel(13)
    assert.equal(mazda.distanceToEmpty(), 13*31)
  })
  it("when the car has fractional gas", function(){
    let mazda = new car ('1243', 31, 12);
    mazda.addFuel(1.5)
    assert.equal(mazda.distanceToEmpty(), 46.5)
  })
 })
 describe("the drive method", function(){
   it("negative drive distance", function(){
     let mazda = new car ('1243', 31, 12);
     mazda.addFuel(10)
     mazda.drive(-1);
     assert.equal(mazda.odomoter, 0)
   })
   it("shouldnt drive if no gas", function(){
    let mazda = new car ('1243', 31, 12);
    mazda.drive(5);
    assert.equal(mazda.odomoter, 0)
  })
  it("shouldnt drive if no gas", function(){
    let mazda = new car ('1243', 31, 12);
    mazda.addFuel(10);
    mazda.drive(1000);
    assert.equal(mazda.odomoter, 310);
    assert.equal(mazda.currentFuel, 0);
  })
  it("normal driving", function(){
    let mazda = new car ('1243', 31, 12);
    mazda.addFuel(10);
    mazda.drive(31);
    mazda.drive(62)
    mazda.drive(15.5)
    
    assert.equal(mazda.odomoter, 108.5);
    assert.equal(mazda.currentFuel, 6.5);
  })
 })

}



// // uses strict mode so strings are not coerced, variables are not hoisted, etc... 
// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // the function that will be called by the unit test below
// const rockPaperScissors = (hand1, hand2) => {

//   hand1 = hand1.toLowerCase()
//   hand1 = hand1.trim()

//   hand2 = hand2.toLowerCase()
//   hand2 = hand2.trim()

//   //tie
//   if(hand1 == "rock" && hand2 == "rock"){
//     return "It\'s a tie!"
//   }
//   else if (hand1 == "scissors" && hand2 == "scissors"){
//     return "It\'s a tie!"
//   }
//   else if (hand1 == "paper" && hand2 == "paper"){
//     return "It\'s a tie!"
//   }
//    //hand1 wons
//   if (hand1 == "rock" && hand2 == "scissors"){
//     return "Hand one wins!"
//   }
//   else if(hand1 == "scissors" && hand2 == "paper"){
//     return "Hand one wins!"
//   }
//   else if (hand1 == "paper" && hand2 == "rock"){
//     return "Hand one wins!"
//   }
//    //hand2 wins
//   if (hand1 == "rock" && hand2 == "paper"){
//     return "Hand two wins!"
//   }
//   else if(hand1 == "scissors" && hand2 == "rock"){
//     return "Hand two wins!"
//   }
//   else if(hand1 == "paper" && hand2 == "scissors"){
//     return "Hand two wins!"
//   }
//   else {
//     return 'Invalid response, try again.'
//   }
// }


// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// function getPrompt() {
//   rl.question('hand1: ', (answer1) => {
//     rl.question('hand2: ', (answer2) => {
//       console.log( rockPaperScissors(answer1, answer2) );
//       getPrompt();
//     });
//   });
// }

// // Unit Tests
// // You use them run the command: npm test main.js
// // to close them ctrl + C

// if (typeof describe === 'function') {

//   // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
//   describe('#rockPaperScissors()', () => {
//     it('should detect a tie', () => {
//       assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
//       assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
//       assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
//     });
//     it('should detect which hand won', () => {
//       assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
//       assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
//     });
//     it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
//       assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
//       assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
//     });
//   });
// } else {

//   // always returns ask the user for another input
//   getPrompt();

// }
