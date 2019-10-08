import {Guest} from "./Guest";

export class Hotel {
  public guests: Guest[] = [];

  constructor(public rooms: number) {}

  public checkInGuest(incomingGuests: Guest[]) : void {
    if(this.availableRooms() === 0) {
      throw Error('No more space at the inn')
    }

    incomingGuests.map( incomingGuest => {
      if (this.guests.includes(incomingGuest)) {
        throw Error('This guest is already checked in')
      }
      this.guests.push(incomingGuest);
    });
  };

  private availableRooms() : number {
    return this.rooms - this.guests.length;
  }
}