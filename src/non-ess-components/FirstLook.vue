<template>
    <v-row v-scroll:#scroll-target="onScroll" justify="center" class="masterhead">
        <v-col cols="auto">
            <div class="title-area" justify="center" align="center">
                <h1
                    :style="{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: titleSize + 'px',
                    }"
                    class="anim-title"
                >
                    <span class="title-letter color-transition" v-for="(letter, index) in titleName" :key="index">
                        {{ letter }}
                    </span>
                </h1>
            </div>
            <v-row class="sub-title-container" align="center" justify="center">
                <v-col
                    cols="auto"
                    style="display: flex; padding: 0px 20px !important"
                    v-for="(iAm, index) in iAmList"
                    :key="index"
                >
                    <span class="sub-titles">
                        <p class="each-sub-titles">
                            {{ iAm }}
                        </p>
                    </span>
                    <span v-if="index !== iAmList.length - 1" class="sub-titles-divider">|</span>
                </v-col>
            </v-row>
            <!-- <p class="about-me" justify="center">
                Hi, I am Shrikant Patel from Denver, Colorado with ~3 years of experience as FrontEnd Software Engineer.
                Event though first framework that I learned was Angular, I generally work on Vue & React. When I am not
                programming, I like to go for hiking, cooking, or watch few Real Madrid or Juventus games. I have
                currently started to create content on FrontEnd Development related topics for Instagram, & soon for
                YouTube.
            </p> -->
            <!-- <div align="center" justify="center">
                <v-icon class="slide-down">
                    mdi-chevron-triple-down
                </v-icon>
            </div> -->
        </v-col>
    </v-row>
</template>

<script lang="ts">
import vue from 'vue';
import { Component } from 'vue-property-decorator';
import RGBClass from '@/helper/ColorChange';
import { RGB, ColorName, ColorLists, ColorList, GetRGBList } from '@/helper/Colors';
import { Fraction } from '@/helper/helperIndex';

@Component
export default class FirstLook extends vue {
    scrollVariable: number = 0;
    titleName: string = 'ShrikantPatel';
    char = -1;
    colorChar: number = 0;
    timer: any;
    titleColorArray: any[] = [];
    animTime: number = 0;
    colorList: RGB[] = GetRGBList;
    colorIndex: number = 0;

    iAmList: string[] = [
        'Web Designer',
        'Software Developer',
        'Algorithm Enthusiast',
        'rookie Content Creator',
        'Former Soccer Player',
        'Painter',
        'Cook',
        'Star Wars',
        'Marvels',
        'Game of Thrones',
        'Gym Enthusiastic',
    ];

    get imgHeight() {
        let number: number = this.scrollVariable;
        let constant = 400;
        constant += number;
        return constant ? constant : 0;
    }
    get titleSize(): number {
        return this.scrollVariable < 800 ? this.scrollVariable / 15 + 100 : 60;
    }

    created() {
        let index = 0;
        for (let letter of this.titleName) {
            let color: any = new RGBClass();
            let limit: number = index * 100;
            for (let i = 0; i < limit; i++) color.colorChange();
            this.titleColorArray.push({
                letter,
                index,
                color,
            });
            index++;
        }
    }

    //do not make it array function
    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
    }

    //do not make it array function
    mounted() {
        this.timer = setInterval(this.onTick, 100);
        this.onTick();
        let text = document.querySelector('.sub-title-container');
        for (let iAm in this.iAmList) {
            let span: any = text?.querySelectorAll('.sub-titles')[iAm];
            let colorIndx = Number(iAm) % this.colorList.length;
            span.style.setProperty('--lineColor', `#${this.colorList[colorIndx]}`);
        }
    }

    //do not make it array function
    onTick() {
        let text = document.querySelector('.anim-title');
        let span: any = text?.querySelectorAll('.title-letter')[this.char];
        span?.classList.add('fade');
        this.char++;
        if (this.char == this.titleName.length) {
            clearInterval(this.timer);
            this.timer = null;
            this.char = 0;
            this.timer = setInterval(this.slowColorChange, 100);
            return;
        }
    }

    //do not make it array function
    slowColorChange() {
        let text: any = document.querySelector('.anim-title');
        let span: any = text.querySelectorAll('.title-letter')[this.char];
        if (this.colorIndex % 2 === 0) {
            span.style.color = `#${this.colorList[this.colorIndex / 2]}`;
        } else {
            if (Math.floor(this.colorIndex / 2) % 2)
                span.style.backgroundImage = `linear-gradient(#${this.colorList[Math.floor(this.colorIndex / 2)]}, #${
                    this.colorList[Math.floor(this.colorIndex / 2 + 1)]
                })`;
            else
                span.style.backgroundImage = `linear-gradient(#fff, #${
                    this.colorList[Math.floor(this.colorIndex / 2)]
                })`;
            span.style.webkitBackgroundClip = 'text';
            span.style.color = 'transparent';
        }
        // if (++this.animTime === 1000) {
        //     clearInterval(this.timer);
        //     this.timer = null;
        //     return;
        // }
        if (++this.char > this.titleName.length - 1) {
            this.colorIndex = ++this.colorIndex % (this.colorList.length * 2);
            this.char = 0;
        }
    }
}
</script>
<style lang="scss" scoped>
.masterhead {
    height: 100vh;
}

.anim-title {
    width: '100%';
    overflow-x: 'hidden';
    transition: 'all 0.1s ease-out';
}

.title-area {
    margin-top: 20rem;
    margin-bottom: 2rem;
    width: 100%;
    height: auto;
    overflow-y: hidden;
    overflow-x: hidden;
}

.sub-title-container {
    max-width: 100%;
    // height: 100%;
}

.sub-titles {
    position: relative;
    --lineColor: #cb6bff;
}

.sub-titles:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    //under/overline height
    height: 15px;
    opacity: 0.7;
    background: var(--lineColor);
    //how bottom the underline will be
    bottom: 15px;
    transition: all 0.2s ease-out;
}

.sub-titles:hover:before {
    //how down side the underline will slide
    transform: translateY(15px);
}

.each-sub-titles {
    position: relative;
    display: inline-block;
    //subtitles fontsize
    font-size: 40px;
    background: linear-gradient(to bottom, #fff, #fff 50%, #000 50%, #000 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent !important;
    background-repeat: no-repeat;
    transition: all 0.2s ease-out;
    white-space: nowrap;
    margin-bottom: 0 !important;
}
.each-sub-titles:hover {
    background-position: 0 15px;
}

.sub-titles-divider {
    position: relative;
    display: inline-block;
    font-size: 40px;
    left: 15px;
    right: 15px;
}

//
.title-letter {
    opacity: 0;
    transition-property: opacity, color;
    transition-duration: 1s;
}

.title-letter.fade {
    opacity: 1;
}

.about-me {
    text-align: center;
    font-size: 20px;
    margin: 3% 5%;
}

.slide-down {
    // position: absolute;
    // top: auto;
    // bottom: 50px;
    // text-align: center;
    top: 50px;
    font-size: 50px;
    color: grey;
}

h1 {
    font-size: 6rem;
    font-weight: normal;
}
</style>
