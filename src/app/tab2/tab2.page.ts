import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../shared/photo.service';
import { PhotoModel } from '../shared/photo.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

  async inspectImage() {
    await this.photoService.inspectImage();
  }

}
