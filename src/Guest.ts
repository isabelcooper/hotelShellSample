export class Guest {
  currentHotel: string | null;
  constructor(private name: string) {
  };

  checkIn(hotelName: string) {
    this.currentHotel = hotelName;
  };
}
