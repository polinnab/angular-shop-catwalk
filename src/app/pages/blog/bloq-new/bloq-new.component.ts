import { Component, OnInit, Input } from '@angular/core';
import { GoodsService } from "../../../goods.service";
import { Blog, Good } from "../../../types";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-bloq-new',
  templateUrl: './bloq-new.component.html',
  styleUrls: ['./bloq-new.component.sass']
})
export class BloqNewComponent implements OnInit {

  // @Input() blogOne: Blog;
  blog: Blog;

  blogs: Blog[];
  goodsSlider: Good[];
  goodsCategory: Good[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private goodsService: GoodsService
  ) { }

  ngOnChanges() {
    if(this.blog && this.goodsSlider) {
      console.log('Изменения произошли. все заполнено')
    }
  };

  ngOnInit(): void {
    this.getPost();
    this.getGoods();
    // this.getGoodsByCat();
  };

  // getBlogs() {
  //   this.goodsService.getBlogs().subscribe(blogs => this.blogs = blogs["blogs"]);
  // }

  getPost() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.goodsService.getBlogs().subscribe(blog => console.log(this.blog = blog["blogs"].find(blog => blog.id === id)));
  };

  getGoods() {
    this.goodsService.getGoods().subscribe(goods => {
      this.goodsSlider = goods["goods"];
      this.getRandomGood();
      // this.getGoodsByCat();
    });

  };

  getRandomGood(): Good[] {
    return this.goodsSlider.sort(function() {
      return Math.random() - 0.5;
    });

  };

  getGoodsByCat() {
    this.goodsSlider.forEach(el => {
      if (el.subCategory == this.blog.subcategory) {
        this.goodsCategory.push(el);
      }
    });
    console.log(this.goodsCategory);


    // this.blog.subcategory.forEach(cat => {
    //   console.log(this.goodsSlider.map(el => el.subCategory == cat));

    //   })

  }

}
