import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { GoodsService } from "../../../goods.service";
import { Good } from "../../../types";


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.sass']
})
export class FiltersComponent implements OnInit {

  @Input() goodsGoods: Good[];
  @Input() goodsFiltered: Good[];

  @Output() filteredBy = new EventEmitter<Good[]>();
  // goods$: Observable<Good[]>;
  goods: Good[];
  categoryfromMain = '';

  selectedcategory;

  colors = [
    { id: "black", label: "Черный"},
    { id: "white", label: "Белый"},
    { id: "red", label: "Красный"},
    { id: "blue", label: "Синий"},
    { id: "green", label: "Зеленый"},
    { id: "yellow", label: "Желтый"},
    { id: "grey", label: "Серый"},
    { id: "nude", label: "Бежевый"},
    { id: "gold-silver", label: "Золотой/Серебристый"},
    { id: "multicolor", label: "Разноцветный"}
  ];

  sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "36", label: "36" },
    { id: "37", label: "37" },
    { id: "38", label: "38" },
    { id: "39", label: "39" },
    { id: "40", label: "40" }
  ]

  categoriesClothes = [
    { id: "jackets", label: "Куртки" },
    { id: "coats", label: "Пальто и тренчи" },
    { id: "sweaters", label: "Свитера и джемперы" },
    { id: "blazers", label: "Пиджаки" },
    { id: "dresses", label: "Платья" },
    { id: "trousers", label: "Брюки и джинсы" }
  ]

  categoriesShoes = [
    { id: "boots", label: "Ботинки" },
    { id: "highboots", label: "Сапоги" },
    { id: "sneakers", label: "Кеды и кросовки" },
    { id: "lowshoes", label: "Туфли" },
    { id: "sandals", label: "Босоножки" }
  ]


  
  filteredOptions = {
    category: '',
    colors: [],
    sizes: []
  }

  params: [];

  perem = false;

  // isActive = false;

  panelOpenState = false;
  currCat: 'string';
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;

  constructor(){ }

  ngOnChanges(simplechanges) {
    
    if (!this.perem) {
      if (this.goodsGoods && this.categoryfromMain) {
        this.categoryfromMain = sessionStorage.getItem('category');
        // this.filteredOptions.category = this.categoryfromMain;
        console.log('Получили из sessionstorage и записали:', this.categoryfromMain);
        this.getOptions('category', this.categoryfromMain);
        console.log('Я сработала!');
      }
    }
    // let result = this.goodsGoods;
    // console.log('Я result в ngOnChanges(): ', result);
    
    // console.log(simplechanges.goodsGoods.currentValue);
  }

  ngOnInit(): void {
    this.getfromSessionstorage();
    console.log('Получили из sessionstorage в onInit() и записали:', this.categoryfromMain);
    let result = this.goodsGoods;
    console.log('Я result в ngOnInit(): ', result);
    // this.getFilterfromMain();

  };

  // ngDoCheck(): void {
  //   // this.getFilterfromMain();
  //   console.log('Вот сейчас выполнится функция getOtions()');
  //   this.getOptions('category', this.categoryfromMain);
  // }

  getOptions(prop, value) {
    
    switch (prop) {
      case 'category':
        // this.isActive = false;
        this.filteredOptions[prop]= '';
        if (!this.filteredOptions[prop].length) this.filteredOptions[prop] = value;
        else this.filteredOptions[prop] = '';
        // this.isActive = true;
        // console.log(this.isActive);
        // console.log('Кликнули на категорию', 'Сейчас в this.filteredOptions.category: ', this.filteredOptions[prop]);
        break;
      case 'sizes':
        console.log('Кликнули на размер');
        const arr = this.filteredOptions[prop];
        console.log(arr);
        const index = arr.indexOf(value);
        console.log(index);
        if (index == -1) arr.push(value);
        else arr.splice(index, 1);
        break;
      
      case 'colors':
        console.log('Кликнули на размер');


        const arrCol = this.filteredOptions[prop];
        console.log(arrCol);
        const indexCol = arrCol.indexOf(value);
        console.log(indexCol);
        if (indexCol == -1) arrCol.push(value);
        else arrCol.splice(indexCol, 1);
        console.log(arrCol)
        break;
    
    
      default:
        break;
    }

    let result = this.goodsGoods;
    console.log('Я result из обычной функции: ', result);

    if (this.filteredOptions.colors.length) result = result.filter(good => {
      if (good.color.some(c => this.filteredOptions.colors.some(fc => c == fc))) return good;
    });

    if (this.filteredOptions.sizes.length) result = result.filter(good => {
      if (good.size.some(s => this.filteredOptions.sizes.some(fs => s.toLowerCase() == fs))) return good;
    });
   
    if (this.filteredOptions.category) result = result.filter(good => {
      if (good.subCategory == this.filteredOptions.category) return good;
    }); 

    // if (this.categoryfromMain) result = result.filter(good => {
    //   if (good.subCategory == this.categoryfromMain) return good;
          
    // });


    this.filteredBy.emit(this.goodsFiltered = result);
    sessionStorage.removeItem('category');
    this.categoryfromMain = '';
    this.perem = true;

  };

  getfromSessionstorage() {
    this.categoryfromMain = sessionStorage.getItem('category');
    // this.filteredOptions.category = this.categoryfromMain;

    // это чтоб раскрыть аккордион
    // if (this.categoryfromMain) {
    //   this.panelOpenState = true
    // }

    // console.log('Записалось в categoryFromMain: ', this.categoryfromMain);
  };

  getFilterfromMain() {
    // if (this.categoryfromMain) {
    //   this.getOptions('category', this.categoryfromMain);
    // }
    
    let result = this.goodsGoods;
    // console.log('Я result в начальной фунции: ', result);

  };

  // getCategory(arr): Good[] {
  //   this.currCat = arr.target.getAttribute('id');
  //   this.goodsFiltered = this.goodsGoods.filter(el => el.subCategory == this.currCat);

  //   console.log(arr.target.getAttribute('id'));

  //   this.filteredBy.emit(this.goodsFiltered);
  //   return this.goodsFiltered;
  // };

  // getColor(arr): Good[] {
    

  //   console.log(arr.target.getAttribute('id'));
  //   return this.goods;
  // }


}
