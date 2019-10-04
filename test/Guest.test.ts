import {Guest} from "../src/Guest";
import {Random} from "../utils/Random";
import {expect} from "chai";

describe('Guest', () => {
  it('should know which hotel it is checked in at', () => {
    const guest = new Guest("Joe");
    const hotelName = Random.string();
    guest.checkIn(hotelName);
    expect(guest.currentHotel).to.eql(hotelName);
  });
});