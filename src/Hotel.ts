import {Guest} from "./Guest";

export class Hotel {
  public guests: Guest[] = [];
  private availableRooms: number;

  constructor(public rooms: number) {
  }

  public checkInGuest(guest: Guest) {
    if(this.guests.filter(checkedInGuest => checkedInGuest === guest) .length < 1){
      if(this.rooms - this.guests.length <= 0) {
        return false
        // throw Error("No more space at the inn")
      }
      this.guests.push(guest);
      this.updateRoomCount();
     } else {
      // throw Error("This guest is already checked in")
      return false
    }
  };

  private updateRoomCount() {
    this.availableRooms = this.rooms - this.guests.length;
    console.log(this.availableRooms);
  }
}