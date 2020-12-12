import { Component, OnInit, Input } from '@angular/core';
import { GoodsService } from "../../../goods.service";

import { Blog } from "../../../types";

@Component({
  selector: 'app-blog-news',
  templateUrl: './blog-news.component.html',
  styleUrls: ['./blog-news.component.sass']
})
export class BlogNewsComponent implements OnInit {

  
  blogs: Blog[];
  // selectedBlog: Blog;

  pageIndex:number = 0;
  pageSize:number = 4;
  lowValue:number = 0;
  highValue:number = 4;

  constructor(private goodService: GoodsService ) { }

  ngOnInit(): void {
    this.getBlogs();
  };

  getBlogs(): void {
    this.goodService.getBlogs().subscribe(data => this.blogs = data["blogs"]);
  };

  getPaginatorData(event){
    console.log(event);
    if(event.pageIndex === this.pageIndex + 1){
       this.lowValue = this.lowValue + this.pageSize;
       this.highValue =  this.highValue + this.pageSize;
      }
   else if(event.pageIndex === this.pageIndex - 1){
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
     }   
      this.pageIndex = event.pageIndex;
}

  // onSelect(blog: Blog) {
  //   this.selectedBlog = blog;
  //   console.log(this.selectedBlog);
  // }



}
