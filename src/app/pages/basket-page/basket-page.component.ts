import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from "@angular/router";
import { BadgeService } from "../../badge.service";




interface City {
  value: string;
  viewValue: string;
};

interface Post {
  value: string;
  viewValue: string;
};

interface Payment {
  value: string;
  viewValue: string;
};


@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.sass']
})
export class BasketPageComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  value = 'Clear me';

  cities: City[] = [
    {value: 'kyiv', viewValue: 'Киев'},
    {value: 'dnipro', viewValue: 'Днепр'},
    {value: 'lviv', viewValue: 'Львов'},
    {value: 'kharkiv', viewValue: 'Харьков'},
    {value: 'odessa', viewValue: 'Одесса'},
    {value: 'zaporizhzha', viewValue: 'Запорожье'},
    {value: 'vinnitsa', viewValue: 'Винница'},
    {value: 'cherkasy', viewValue: 'Черкассы'},
    {value: 'luzk', viewValue: 'Луцк'},
    {value: 'zhytomir', viewValue: 'Житомир'},
    {value: 'uzhgorod', viewValue: 'Ужгород'},
    {value: 'ivanofrankivsk', viewValue: 'Ивано-Франковск'},
    {value: 'kyrovograd', viewValue: 'Кировоград'},
    {value: 'poltava', viewValue: 'Полтава'},
    {value: 'sumy', viewValue: 'Сумы'},
    {value: 'kherson', viewValue: 'Херсон'},
    {value: 'khmelnitsk', viewValue: 'Хмельницк'},
    {value: 'chernigiv', viewValue: 'Чернигов'},
    {value: 'chernivtsi', viewValue: 'Черновцы'},
    {value: 'mykolaiv', viewValue: 'Николев'},
    {value: 'rivne', viewValue: 'Ровно'},
    {value: 'ternopil', viewValue: 'Тернополь'}
  ];

  postoffices: Post[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
    {value: '11', viewValue: '11'},
    {value: '12', viewValue: '12'},
    {value: '13', viewValue: '13'},
    {value: '14', viewValue: '14'},
    {value: '15', viewValue: '15'},
    {value: '16', viewValue: '16'},
    {value: '17', viewValue: '17'},
    {value: '18', viewValue: '18'},
    {value: '19', viewValue: '19'},
    {value: '20', viewValue: '20'},
    {value: '21', viewValue: '21'},
    {value: '22', viewValue: '22'}
  ];

  payments: Payment[] = [
    {value: 'cash', viewValue: 'Наличными при получении'},
    {value: 'card', viewValue: 'Оплата картой'}
  ]

  user = {
    firstname: "",
    lastname: "",
    email: "",
    city: "",
    postoffice: "",
    payment: ""
  }

//  TODO:  Блок с выводом ошибки при неправильном емейл. Поправить потом!
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Введите пожалуйста email';
    }

    return this.email.hasError('email') ? 'Неправильный формат email' : '';
  }

  // Блок с ошибкой емейла закончен



  allGoods = [];
  goodprice = 0;
  sum = 0;
  discountsum = 0;
  sumOfGoods = 0;
  payment = '';
  
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private counter: BadgeService
  ) { }

  ngOnInit(): void {
    this.getFromLocalStorage();
    this.getSum();
    this.getDiscountSum();
    this.countGoods();
  };

  getFromLocalStorage() {
    this.allGoods = JSON.parse(localStorage.getItem('allgoods'));
    console.log(this.allGoods);
  };

  deleteGood(good) {
    this.allGoods.forEach(elem => {
      if (good.id == elem.id) {
        let index = this.allGoods.indexOf(elem);
        console.log('я сумма товаров при удалении:', this.sum);
        console.log('я цена удаляемого товара:', elem.price)
        let elsum; 
        if (elem.sale) {
          let elsum = +elem.price * elem.quantity
          this.sum = this.sum - +this.getDiscount(elsum, .3);
        } else {
          let elsum = +elem.price * elem.quantity
          this.sum = this.sum - elsum;
        };
        if (elem.sale) {
          let discsumone = +elem.price - +this.getDiscount(elem.price, .3);
          let discsumall = discsumone * elem.quantity;
          this.discountsum = this.discountsum - discsumall;
        } 

        this.allGoods.splice(index, 1);
        localStorage.setItem('allgoods', JSON.stringify(this.allGoods));
        let newgoods = localStorage.getItem('allgoods');
        console.log(newgoods);
        


      }
    });

    console.log(this.allGoods); 
  };

  minusGood(good) {
    // good.quantity = good.quantity - 1;
    this.allGoods.forEach(el => {
      if (el == good) {
        el.quantity = el.quantity - 1;
        el.allprice = el.allprice - +el.price;
        if (el.sale) {
          this.sum = this.sum - +this.getDiscount(el.price, .3);
        } else {
          this.sum = this.sum - +el.price;
        };
        if (el.sale) {
          let discsumone = +el.price - +this.getDiscount(el.price, .3);
          this.discountsum = this.discountsum - discsumone;
        } 

      }
    });
    localStorage.setItem('allgoods', JSON.stringify(this.allGoods));
    console.log(this.allGoods);
    


  };

  plusGood(good) {
    // good.quantity = good.quantity - 1;
    this.allGoods.forEach(el => {
      if (el == good) {
        el.quantity = el.quantity + 1;
        el.allprice = el.allprice + +el.price;
        if (el.sale) {
          this.sum = this.sum + +this.getDiscount(el.price, .3);
        } else {
          this.sum = this.sum + +el.price;
        };
        if (el.sale) {
          let discsumone = +el.price - +this.getDiscount(el.price, .3);
          this.discountsum = this.discountsum + discsumone;
        } 
      }
    });
    localStorage.setItem('allgoods', JSON.stringify(this.allGoods));
    console.log(this.allGoods);
    

  };

  getDiscount(price, num): any {
    return this.roundTo(price * (1 - num));

  };

  roundTo(num, n = '0'): any {
    return Math.round( num * (10 ** parseInt(n)) ) / (10 ** parseInt(n));
  };

  getSum() {
    this.allGoods.forEach(el => {
      if (el.sale) {
        let elsum = +el.price * el.quantity
        this.sum = this.sum + +this.getDiscount(elsum, .3);
      } else {
        let elsum = +el.price * el.quantity
        this.sum = this.sum + elsum;
      }
      
    })

    sessionStorage.setItem('sum', '' + this.sum)
  };

  getDiscountSum() {
    this.allGoods.forEach(el => {
      if (el.sale) {
        let discsumone = +el.price - +this.getDiscount(el.price, .3);
        let discsumall = discsumone * el.quantity;
        this.discountsum = this.discountsum + discsumall;
      }
    })
  }

  countGoods() {
    this.allGoods.forEach(el => {
      this.sumOfGoods = this.sumOfGoods + el.quantity;
    });
    sessionStorage.setItem('sumgoods', String(this.sumOfGoods));
    console.log(this.sumOfGoods);
  };

  openDialog() {
   
    if (this.payment == 'cash') {
      const dialogRef = this.dialog.open(BasketModalComponent);
      this.user.city = '';
      this.user.email = '';
      this.user.firstname = '';
      this.user.lastname = '';
      this.user.payment = '';
      this.user.postoffice = '';
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    } else if (this.payment == 'card') {
      this.router.navigate(["/basket/payment"]);
    }

    console.log(this.user)
    
  };

  getUserData(prop, event) {
    this.user[prop] = event.target.value
  }

  checkPayment(payment) {
    this.payment = payment.value;
    this.user.payment = payment.value;
    console.log(this.payment)
  };

  inc() {
    this.counter.incCounter()
  };

  incMinus() {
    this.counter.incCounterMinus()
  }

  clearCounter() {
    this.counter.clearCounter()
  }


}

@Component({
  selector: 'app-basket-modal',
  templateUrl: './basket-modal.component.html',
})
export class BasketModalComponent {}