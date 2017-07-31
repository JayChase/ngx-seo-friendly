import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private title: Title, private metaService: MetaService) { }

  ngOnInit() {
    this.title.setTitle('component 2');
    this.metaService.setMeta('description', 'test component 2');
  }

}
