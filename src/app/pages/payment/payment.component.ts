import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  sum = '';

  ngOnInit(): void {
    this.getFromSessionstorage()
  };

  openDialog() {
    const dialogRef = this.dialog.open(PaymentModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    
  };

  getFromSessionstorage() {
    this.sum = sessionStorage.getItem('sum');
  }

}



@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
})
export class PaymentModalComponent {}
