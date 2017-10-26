export class HappyHour {
  constructor(public startTime: number, public endTime: number, public discount: number) { }

  isHappyHour(currentTime) {
    return (currentTime.getHours() >= 16 && currentTime.getHours() < 18);
  }
}
