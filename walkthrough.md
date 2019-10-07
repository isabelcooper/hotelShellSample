# Walkthrough

A few tips to get you going. There are many ways to build this though, so don't worry if you've come up with something else - it might well be better! 
Let me know if you're stuck and the answers are missing - I'd love to update to make this more helpful! 

### Where to start
1) Have a read of the README. The basic idea is that your hotel class keeps track of how many rooms are available and who's already checked in. 
2) Run the tests by running `npm run test`. You should see a failing test. That's a good place to get going. 

### 'It should check in a new guest' 
1) Why is the test failing? 
2) Add a hotel.checkInGuest function to the Hotel class. 
3) The function should _push_ the guest (from the function parameter) into the hotel's guest array. 
4) For now, let's return true when the action has been completed _- we might change later, but imagine this message shows on the concierge's screen._

<details>
  <summary>Click to see an example</summary>
  
  ```typescript
     static checkInGuest(guest: { name: string }): boolean{
           this.guests.push(guest);
           return true
         }
  ```
</details>

### 'It should check in more than 1 guest at once)'
1) Write your first test. * 
2) Add a new 'if' block to the existing test file. Feel free to copy and paste to get going. 
3) Set up the conditions of the experiment: yuo have a hotel class established already (this is recreated for each test in the 'beforeEach' block). Check two guests in.
4) Add an expectation: what should happen when a second guest checks in? There should be 2 guests in the guest array, right?

<details>
  <summary>Click to show</summary>
  
  ```typescript
     it ('should check in 2 guests', () => {
         //set up: 
         const name1 = Random.string();
         const name2 = Random.string();
         hotel.checkInGuest({name: name1});
         hotel.checkInGuest({name: name2});
         // expectation: 
         expect(hotel.guests).to.eql([{name: name1}, {name: name2}]);
         });
  ```
</details>

* _More on testing coming in a new codeSchool module soon_

### TDD more features into you hotel class
1) For each feature start with a failing test before implementing a solution.
2) Consider refactoring. 
Do actually need to have a nested loop? 
Should any of the functionality be extracted into another class/function? 
Don't forget to refactor your tests too.

<details>
  <summary>Click to show</summary>
  
```typescript
// a beforeEach can help keep testing tidy: 
    beforeEach(() => {
      hotel = new Hotel(10);
      guest = new Guest(Random.string());
    });
// an early return means the remaining code won't be run if the 'if' conditions are met: 
  public checkInGuest(guest: Guest) : boolean {
    if(this.guests.includes(guest) || this.availableRooms() === 0) {
      return false
    }
    this.guests.push(guest);
  };
```

</details>


### Delegate responsibility

As you work, you might find your hotel class having to hold on to lots of information, like the names, locations, dietary preferences of guests or the cost of items on the menu. When you're adding a feature (or during refactoring), consider moving some of this into new classes eg: 
Guest class: stores guest's location, dietary requirements
Restaurant class: stores the menu and guest selections
Calculator class: handles the calculation of bills, given a list 
Concierge/Printer class: prints system feedback (like whether there's a free room) back to the terminal and accepts input from guests. 

### Stubbing in tests

In unit testing, you're only interested in how the class behaves that you're testing, so it can be helpful to control the behaviour of other classes it calls out to so you know what kind of repsonse you're expecting. 

For example, if your hotel class checks a guest's location before checking them in, you might want to control 2 scenarios: 
1) the guest is already checked in at a hotel (expecting the checkin to be fail)
2) the guest is not checked in anywhere (expecting the checkin to be successful)

// fake guest with controlled response?
// need to cover types first? 