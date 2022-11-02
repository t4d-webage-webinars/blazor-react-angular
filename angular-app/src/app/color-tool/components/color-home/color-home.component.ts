import { Component, OnInit } from '@angular/core';

import { Color, NewColor } from '../../models/colors';
import { ColorsDataService } from '../../services/colors-data.service';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = "Color Tool";

  colors: Color[] = [];

  constructor(private colorsData: ColorsDataService) {
  }

  ngOnInit(): void {
    this.doRefreshColors();
  }

  doRefreshColors() {
    this.colors = this.colorsData.all();
  }

  doAddColor(color: NewColor) {
    this.colorsData.append(color);
    this.doRefreshColors();
  }

  doDeleteColor(colorId: number) {
    this.colorsData.remove(colorId);
    this.doRefreshColors();
  }
}
