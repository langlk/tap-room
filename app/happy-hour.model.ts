export class HappyHour {
  constructor(public startTime: number, public endTime: number, public discount: number) { }

  isHappyHour(currentTime) {
    return (currentTime.getHours() >= this.startTime && currentTime.getHours() < this.endTime);
  }

  startFormatted() {

  }
}
