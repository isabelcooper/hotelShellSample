# Walkthrough

Try this out without the walkthrough first - this is more to help you get unstuck. There are many ways to build this though, so don't worry if you've come up with something else - it might well be better! 
Let me know if you're stuck and the answers are missing - I'd love to update to make this more helpful! 

### Where to start
1) Have a read of the README. The basic idea is that your hotel class keeps track of how many rooms are available and who's already checked in. 
2) Run the tests by running `npm run test`. You should see a failing test. That's a good place to get going. 

### 'It should check in a new guest' 
1) Why is the test failing? 
2) Add a hotel.checkInGuest function to the Hotel class. 
3) The function should _push_ the guest (from the function parameter) into the hotel's guest array. 
4) For now, let's return true when the action has been completed _- we might change later, but imagine this message shows on the concierge's screen._

<details><summary>Click to see an example</summary>
<p>
```javascript 
  static checkInGuest(guest: { name: string }): boolean{
    this.guests.push(guest);
    return true
  }
```
</p>
</details>

### 'It should check in more than 1 guest at once)'
1) Write your first test. * 
2) Add a new 'if' block to the existing test file. Feel free to copy and paste to get going. 
3) Set up the conditions of the experiment: yuo have a hotel class established already (this is recreated for each test in the 'beforeEach' block). Check two guests in.
4) Add an expectation: what should happen when a second guest checks in? There should be 2 guests in the guest array, right?

<details><summary>Click to show</summary>
<p>
```javascript 
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
</p>
</details>

* _More on testing coming in a new codeSchool module soon_

### 'It should only check in a guest once'
1) write your test and implement a solution. 
2) Refactoring 


_Refactoring test?_ 



### Features to add: 

#### Checking In 
- [ ] Confirm a stay for tonight and update the hotel
- [ ] Don't allow the same guest to check in more than once (throw an error?)
- [ ] Don't allow a guest to check in if there are no free rooms
- [ ] BONUS: Consider refactoring your 'checkIn' function 

#### Check out
- [ ] On checking out a guest, update the hotel system to record the free room
- [ ] Request payment from the guest on checkout

#### Guests
- [ ] Store guests' names and dietary requirements eg vegetarian, nut allergy etc. 
- [ ] Guests should know which hotel they're checked in at at any given time.

#### Rooms
- [ ] Record when a guest complains about a room - the room cannot be used while it is broken
- [ ] Send a builder to fix the broken room 

#### Restaurant
- [ ] Print a restaurant menu 
- [ ] Select a menu for a guest, but don't give them anything they're allergic to
- [ ] Update checkout to include the restaurant bill

#### More hotels
- [ ] Add another hotel to the chain. A guest cannot be staying in more than one hotel on any given night. 
