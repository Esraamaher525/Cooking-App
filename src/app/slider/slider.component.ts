import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public splash=true;
  public content=document.getElementsByClassName('slider') as HTMLCollectionOf<HTMLElement>;
  public splashpart=document.getElementsByClassName('splashPart') as HTMLCollectionOf<HTMLElement>;
  
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.splash=false;
      this.content[0].style.display='inline';
      this.splashpart[0].style.display='none';
    },4000)
  }
  }
 
