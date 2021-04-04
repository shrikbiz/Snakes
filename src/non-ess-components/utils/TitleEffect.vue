<template>
    <div align="center">
        <h1
            :style="{
                opacity: changeOpacity,
                backgroundImage: `linear-gradient(${secondColorEffect} , ${primaryColorEffect} ${colorFraction}%)`,
                fontFamily: 'Montserrat, sans-serif',
                overflowX: 'hidden',
                webkitBackgroundClip: 'text',
                color: 'transparent',
            }"
            class="section-title"
        >
            {{ title }}
        </h1>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Fraction } from '@/helper';

@Component
export default class TitleEffect extends Vue {
    @Prop() scrollVariable!: any;
    @Prop() title!: any;
    @Prop() effectEnd!: any;
    @Prop() difference?: any;
    @Prop() primaryColorHex!: any;
    secondaryColor: number[] = [255, 255, 255];

    get effectStart(): number {
        return this.effectEnd - (this.difference ? this.difference : 500);
    }
    get changeOpacity(): number {
        return Fraction(this.effectStart + 300, this.effectEnd, this.scrollVariable);
    }
    get primaryColorEffect(): string {
        let rgbArray = this.colorChange(this.primaryColorHex, 600, 450);
        return `rgb(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]})`;
    }
    get secondColorEffect(): string {
        let number = Math.floor(Fraction(this.effectStart + 350, this.effectEnd, this.scrollVariable) * 256);
        number = number < 255 ? number : 255;
        let oneth = this.numberToHex(Math.floor(number / 16))?.toString();
        let zeroth = this.numberToHex(number % 16)?.toString();
        let hexValue = oneth?.concat(zeroth) + oneth?.concat(zeroth) + oneth?.concat(zeroth);
        return `#${hexValue}`;
        // let rgbArray = this.colorChange(this.secondaryColor);
        // return `rgb(${this.secondaryColor[0] - rgbArray[0]},${this.secondaryColor[1] - rgbArray[1]},${this
        //     .secondaryColor[2] - rgbArray[2]})`;
    }

    get colorFraction() {
        let fraction = 1 - Fraction(this.effectStart + 600, this.effectEnd + 450, this.scrollVariable);
        let limit = 0;
        return (fraction < limit ? limit : fraction) * 100;
    }

    colorChange(colorArray: number[], addToStart: number = 0, addToEnd: number = 0): number[] {
        let firstLimit: number = colorArray[0];
        let secondLimit: number = colorArray[1];
        let thirdLimit: number = colorArray[2];
        let fraction = Fraction(this.effectStart + addToStart, this.effectEnd + addToEnd, this.scrollVariable);
        return [
            Math.floor(firstLimit * fraction),
            Math.floor(secondLimit * fraction),
            Math.floor(thirdLimit * fraction),
        ];
    }

    //color picker helper
    numberToHex(num: number) {
        let hex: any = new Map([
            [10, 'a'],
            [11, 'b'],
            [12, 'c'],
            [13, 'd'],
            [14, 'e'],
            [15, 'f'],
        ]);
        return hex.has(num) ? hex.get(num) : num;
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}
.section-title {
    transition: 'all 1s ease';
    width: '100%';
}
h1 {
    font-size: 5em;
    font-weight: normal;
}
</style>
