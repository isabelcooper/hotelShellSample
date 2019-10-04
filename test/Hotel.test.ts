import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";
import {Guest} from "../src/Guest";

describe("Hotel", () => {
  let hotel: Hotel;
  let guest: Guest;
  const name1 = Random.string();


  beforeEach(() => {
    hotel = new Hotel(10);
    guest = new Guest(Random.string());
  });

  describe("Establishing the hotel", () => {
    it ('should be created with no guests', () => {
      expect(hotel.guests).to.eql([])
    });
  });

  describe("Handling checkin", () => {
    it ('should check in a new guest', () => {
      const name = Random.string();
      hotel.checkInGuest(guest);
      expect(hotel.guests).to.eql([{name}]);
      hotel.checkInGuest(guest);
      expect(hotel.guests).to.eql([guest]);
    });

    it ('should only allow a guest to check in once', () => {
      hotel.checkInGuest(guest);
      expect(hotel.checkInGuest(guest)).to.eql(false);
      // expect(hotel.checkInGuest(guest)).to.throw(new Error,("This guest is already checked in"));
    });

    it('should check in multiple guests', () => {
      const guest2 = new Guest(Random.string());
      console.log(hotel.guests);
      hotel.checkInGuest(guest);
      hotel.checkInGuest(guest2);
      expect(hotel.guests).to.eql([guest,guest2]);
    });

    it ('should not check in a guest if there is no room', () => {
      for(let i = 0; i < hotel.rooms; i ++) {
        hotel.checkInGuest(new Guest(Random.string()));
      }
      expect(hotel.checkInGuest(guest)).to.eql(false);
      // expect(hotel.checkInGuest(guest)).to.throw(new Error("No more space at the inn"));
    });
  });
});
