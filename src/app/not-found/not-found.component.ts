import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private metaService: MetaService) { }

  ngOnInit() {
    this.metaService.setMeta('prerender-status-code', '404');
  }

}
