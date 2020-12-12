import { Component, OnInit } from '@angular/core';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.sass']
})
export class SubscribeComponent implements OnInit {

  faArrowRight = faArrowRight;
  constructor() { }

  ngOnInit(): void {
  }

}
