import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  faSkype = faSkype;
  constructor() { }

  ngOnInit(): void {
  }

}
