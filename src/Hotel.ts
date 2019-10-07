import {Guest} from "./Guest";

export class Hotel {
  public guests: Guest[] = [];

  constructor(public rooms: number) {}

  public checkInGuest(guest: Guest) : boolean {
    if(this.guests.includes(guest) || this.availableRooms() === 0) {
      return false
    }
    this.guests.push(guest);
  };

  private availableRooms() : number {
    return this.rooms - this.guests.length;
  }
}