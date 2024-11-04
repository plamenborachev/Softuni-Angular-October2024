import { Component, Input } from '@angular/core';
import { Article } from '../data/seed';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  private symbols: number = 250;
  @Input() article: Article = {
    title: '',
    description: '',
    author: '',
    imageUrl: ''
  };
  @Input() articleDesc: string = '';
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show image';

  constructor(){
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(): void{
    this.articleDescLen += this.symbols;
    if (this.articleDescLen >= this.articleDesc.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else {
      this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
    }
  }

  toggleImage(): void{
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? 'Hide Image' : 'Show image';
  }

  hideDesc(): void{
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}