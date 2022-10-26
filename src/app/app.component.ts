import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isTime: boolean = false;
  lastTime: string | undefined;

  evaluateIfItIsTime() {
    if (!this.lastTime) {
      console.log("last time undefined, evaluated false")
      this.isTime = false;
      return;
    }
    const date = new Date()
    date.setHours(parseInt(this.lastTime.split(":")[0]))
    date.setMinutes(parseInt(this.lastTime.split(":")[1]))
    const threeHoursSinceLastTime = this.addHours(3, date)
    this.isTime = new Date() > threeHoursSinceLastTime
    console.log(`last time defined ${this.lastTime}, evaluated ${this.isTime}`)
  }

  addHours(numOfHours: number, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return date;
  }
}
