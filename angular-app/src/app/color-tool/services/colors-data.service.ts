import { Injectable } from '@angular/core';

import { Color, NewColor } from '../models/colors';

@Injectable({
  providedIn: 'root'
})
export class ColorsDataService {

  private _colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
    { id: 2, name: 'green', hexcode: '00ff00' },
    { id: 3, name: 'blue', hexcode: '0000ff' },
  ];

  all() {
    return [ ...this._colors ];
  }

  append(color: NewColor) {
    this._colors = [
      ...this._colors,
      {
        id: Math.max(...this._colors.map(c => c.id)) + 1,
        ...color,
      }
    ];
  }

  remove(colorId: number) {
    this._colors = this._colors.filter(c => c.id !== colorId);
  }

}
