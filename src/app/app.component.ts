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
    this.imageAndre = this.getUrl(Name.Andre);
    this.imageBeate = this.getUrl(Name.Beate);
    this.imageCecile = this.getUrl(Name.Cecile);
    this.imageDavin = this.getUrl(Name.Davin);
  }

  getUrl(name: string): string {
    switch (name) {
      case Name.Andre:
        return this.getRandomUrl(Name.Andre);
      case Name.Beate:
        return this.getRandomUrl(Name.Beate);
      case Name.Cecile:
        return this.getRandomUrl(Name.Cecile);
      case Name.Davin:
        return this.getRandomUrl(Name.Davin);
      default:
        return "";
    }
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
