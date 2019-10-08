import {expect} from 'chai';
import {Random} from "../utils/Random";
import {Hotel} from "../src/Hotel";
import {Guest} from "../src/Guest";

describe("Hotel", () => {
  let hotel: Hotel;
  let guest: Guest;

  beforeEach(() => {
    hotel = new Hotel(10);
    guest = new Guest(Random.string());
  });

  it ('should be created with no guests', () => {
    expect(hotel.guests).to.eql([])
  });

  it ('should check in a new guest', () => {
    hotel.checkInGuest([guest]);
    expect(hotel.guests).to.eql([guest]);
  });

  it ('should allow multiple guests to check in', () => {
    const guest2 = new Guest(Random.string());
    hotel.checkInGuest([guest]);
    hotel.checkInGuest([guest2]);
    expect(hotel.guests).to.eql([guest, guest2]);
  });

  it ('should only allow a guest to check in once', () => {
    hotel.checkInGuest([guest]);
    try {hotel.checkInGuest([guest]) } catch (e) {
      expect(e.message).to.eql('This guest is already checked in');
    }
  });

  it('should check in multiple guests', () => {
    const guest2 = new Guest(Random.string());
    hotel.checkInGuest([guest]);
    hotel.checkInGuest([guest2]);
    expect(hotel.guests).to.eql([guest,guest2]);
  });

  it ('should not check in a guest if there is no room', () => {
    for(let i = 0; i < hotel.rooms; i ++) {
      hotel.checkInGuest([new Guest(Random.string())]);
    }
    try {hotel.checkInGuest([guest])}
    catch (e) {
      expect(e.message).to.eql("No more space at the inn");
    }
  });

  it('should allow multiple guests to check in at once', () => {
    const guest2 = new Guest(Random.string());
    hotel.checkInGuest([guest, guest2]);
    expect(hotel.guests).to.eql([guest, guest2]);
  })
});
