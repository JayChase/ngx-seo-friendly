import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private title: Title, private metaService: MetaService) { }

  ngOnInit() {
    this.title.setTitle('component 1');
    this.metaService.setMeta('description', 'test component 1');
  }

}
