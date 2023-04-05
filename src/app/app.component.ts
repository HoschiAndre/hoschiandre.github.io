import {Component, OnInit} from '@angular/core';
import {Name} from "./app.component.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  imageAndre: string = "";
  imageBeate: string = "";
  imageCecile: string = "";
  imageDavin: string = "";

  ngOnInit() {
    this.imageAndre = this.getRandomUrl(Name.Andre);
    this.imageBeate = this.getRandomUrl(Name.Beate);
    this.imageCecile = this.getRandomUrl(Name.Cecile);
    this.imageDavin = this.getRandomUrl(Name.Davin);
  }

  onClick(): void {
    window.location.reload();
  }

  private getRandomUrl(name: string): string {
    let count = this.randomIntFromInterval(1, 51);
    let baseUrl = "./assets/images/";
    let nameUrl = name + "/" + name + "__000" + count + ".jpg";
    console.log(baseUrl + nameUrl);
    return baseUrl + nameUrl;
  }

  private randomIntFromInterval(min: number, max: number): string {
    let randomNumber: number = Math.floor(Math.random() * (max - min + 1) + min);
    let strNumber: string;

    if (randomNumber < 10) {
      strNumber = "0" + randomNumber;
    } else {
      strNumber = randomNumber.toString();
    }

    return strNumber;
  }
}
