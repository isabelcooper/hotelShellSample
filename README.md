# Happy Hotel 

## Getting started

- Fork this repo to your account (`Fork` top right)
- `git clone` your repo to your local machine
- change directory into your new hotelShell repo (`cd hotelShell`)
- run `npm run test` - there should be a failing test to get you going 


## Hotel Rules: 
- No extensions can be made to the hotel or its component parts without first implementing a failing test
- The hotel is not responsible for keeping guest or restaurant data
- Read through the features and pick off the easiest first, they not necessarily in order :) 

### F
### Features to add: 

#### Checking In 
- [X] Confirm a stay for tonight and update the hotel
- [X] Don't forget about your first guest when another checks in
- [X] Allow multiple guests to check in at once
- [X] Don't allow the same guest to check in more than once (throw an error?)
- [X] Don't allow a guest to check in if there are no free rooms
- [X] BONUS: Consider refactoring your 'checkIn' function 

#### Check out
- [X] On checking out a guest, update the hotel system to record the free room
- [ ] Request payment from the guest on checkout

#### Concierge
- [ ] Print messages to guest to a screen and allow them to input responses

#### Guests
- [ ] Store guests' names and dietary requirements eg vegetarian, nut allergy etc. 
- [ ] Guests should know which hotel they're checked in at at any given time.

#### Rooms
- [ ] Record when a guest complains about a room - the room cannot be used while it is broken
- [ ] Send a builder to fix the broken room 

#### Room service
- [ ] Print a room service menu 
- [ ] Don't let a guest order anything they're allergic to
- [ ] Update checkout to include the room service bill

#### More hotels
- [ ] Add another hotel to the chain. A guest cannot be staying in more than one hotel on any given night. 
