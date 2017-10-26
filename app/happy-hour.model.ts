export class HappyHour {
  constructor(public startTime: number, public endTime: number, public discount: number) { }

  isHappyHour(currentTime) {
    return (currentTime.getHours() >= this.startTime && currentTime.getHours() < this.endTime);
  }

  startFormatted() {
    return this.formatTime(this.startTime);
  }

  endFormatted() {
    return this.formatTime(this.endTime);
  }

  formatTime(time) {
    if (time == 12) {
      return time + "pm";
    } else if (time == 24) {
      return 12 + "am";
    } else if (time > 12) {
      return (time - 12) + "pm";
    } else {
      return time + "am";
    }
  }
}
