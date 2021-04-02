<template>
    <div class="work-info" :style="{ background: radialEffect(0, 900) }">
        <div class="work-container">
            <v-row v-scroll:#scroll-target="onScroll" justify="center" class="title-row">
                <v-col cols="auto">
                    <TitleEffect
                        :scrollVariable="scrollVariable"
                        :title="'Work'"
                        :effectEnd="600"
                        :difference="500"
                        :primaryColorHex="color.hex"
                    />
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="auto" align="right" class="card-col">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="900"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            jobTitle: 'FrontEnd Software Engineer',
                            companyName: 'Lumen Technologies',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/LumenLogo.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
                <v-col cols="auto" class="card-col"> </v-col>
                <v-col cols="auto" class="card-col"> </v-col>
                <v-col align="left" class="card-col" cols="auto">
                    <Card
                        :isDirectionLeft="false"
                        :effectEnd="1200"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            jobTitle: 'Software Specialist',
                            companyName: 'eClinicalWorks',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/eCW.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
                <v-col cols="auto" align="right" class="card-col">
                    <Card
                        :isDirectionLeft="true"
                        :effectEnd="1500"
                        :difference="350"
                        :scrollVariable="scrollVariable"
                        :jobDetails="{
                            jobTitle: 'Software Developer (Intern)',
                            companyName: 'Mazcon InfoTech',
                            description: tempDescription,
                        }"
                    >
                        <template v-slot:logo>
                            <v-img contain src="@/assets/mazcon.png" class="company-logo"> </v-img>
                        </template>
                    </Card>
                </v-col>
                <v-col cols="auto" class="card-col"></v-col>
            </v-row>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Fraction } from '@/helper/helperIndex';
import { RGB, ColorName, ColorLists, ColorList, GetRGBList } from '@/helper/Colors';

@Component({
    components: {
        TitleEffect: () => import('@/components/utils/TitleEffect.vue'),
        Card: () => import('@/components/utils/Card.vue'),
    },
})
export default class WorkLook extends Vue {
    color: ColorList = ColorLists[0];
    scrollVariable: number = 0;
    tempDescription: string = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consequuntur
                                perspiciatis at repudiandae architecto rerum similique rem velit minima.
                                Voluptates ipsam id, laudantium molestias numquam doloribus accusamus ad quos
                                odit!`;

    onScroll(event: any) {
        this.scrollVariable = event.target.scrollTop;
    }

    radialEffect(start: number, end: number) {
        let fraction = Fraction(start, end, this.scrollVariable);
        let hex = this.color.hex;
        return `radial-gradient(circle at ${200 - fraction * 100}%, rgba(${hex}, 0.527) 5%, #eee 35%, #121212 35%)`;
    }
}
</script>

<style scoped lang="scss">
* {
    font-family: Montserrat, sans-serif;
}

.company-logo {
    max-width: 100px;
    position: absolute;
    right: 10px;
    left: auto;
}

.work-info {
    position: relative;
    height: 150vh;
    background: #121212;
}
.work-container {
    width: 100%;
    position: relative;
    top: 0rem;
}

.title-row {
    margin-bottom: 5rem;
}
.card-col {
    width: 50%;
}
</style>
