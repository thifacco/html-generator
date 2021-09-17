import {
  AfterViewInit,
  Component,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('contentHtml', { static: false }) contentHtml;

  ngOnInit() {}

  ngAfterViewInit() {
    this.contentHtml = `
      <div style="background-color: #F83A85; padding-top: .5rem; padding-bottom: .5rem">
      <div class="container">
      <div class="d-flex flex-row justify-content-center align-items-center">
      <img src="http://localhost:1337/uploads/icon_delivery_white_cd2096821f.svg" class="mr-2" height="16">
      <span style="font-size: 12px; font-weight: bold; color: #fff">Frete grátis para SP ou FIXO para o restante do Brasil</span>
      </div>
      </div>
      </div>
    `;
  }
}
