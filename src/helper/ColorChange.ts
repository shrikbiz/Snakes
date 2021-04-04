export default class ColorChange {
  rgb: number[] = [255, 130, 130];
  colorIndex = 1;
  constructor(
    r: number = 255,
    g: number = 130,
    b: number = 130,
    clrIndx: number = 1
  ) {
    this.rgb = [r, g, b];
    this.colorIndex = clrIndx;
  }
  colorChange() {
    if (this.colorIndex === 1 && ++this.rgb[this.colorIndex] > 254)
      this.colorIndex = 0;
    else if (this.colorIndex === 0 && --this.rgb[this.colorIndex] < 131)
      this.colorIndex = 2;
    else if (this.colorIndex === 2 && ++this.rgb[this.colorIndex] > 254)
      this.colorIndex = 4;
    else if (this.colorIndex === 4 && --this.rgb[this.colorIndex - 3] < 131)
      this.colorIndex = 3;
    else if (this.colorIndex === 3 && ++this.rgb[this.colorIndex - 3] > 254)
      this.colorIndex = 5;
    else if (this.colorIndex === 5 && --this.rgb[this.colorIndex - 3] < 131)
      this.colorIndex = 1;
  }

  getColor(): number[] {
    return this.rgb;
  }
}

//     //1->0->2->4->3->5
//     /**
//      *  255,    130,        130
//      *          130->255
//      *  255->130
//      *                      130->255
//      *          255->130
//      * 130->255
//      *                      255->130
//      */
