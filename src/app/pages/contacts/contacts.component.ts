import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {


  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  faSkype = faSkype;
  constructor() { }

  ngOnInit(): void {
  }

}
