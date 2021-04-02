<template>
  <v-card
    min-width="500"
    class="work-card"
    :style="{ maxWidth: '600px', left: cardSlideEffect, overflowX: 'hidden' }"
  >
    <v-card-title class="mt-8">
      <strong class="ml-8" style="font-size: 2em">
        {{ jobDetails.companyName }}
      </strong>
    </v-card-title>

    <v-card-title>
      <strong class="ml-8" style="color: grey">
        {{ jobDetails.jobTitle }}
      </strong>
      <slot name="logo"></slot>
    </v-card-title>

    <v-card-text>
      <div class="font-weight-bold ml-8 mb-2" align="left">
        {{ jobDetails.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Fraction } from "@/helper/helperIndex";

interface JobDetails {
  jobTitle: string;
  companyName: string;
  description: string;
}

@Component
export default class Card extends Vue {
  @Prop() isDirectionLeft!: any;
  @Prop() effectEnd!: any;
  @Prop() difference!: any;
  @Prop() scrollVariable!: any;
  @Prop() jobDetails!: JobDetails;

  get effectStart(): number {
    return this.effectEnd - (this.difference ? this.difference : 500);
  }
  get cardSlideEffect(): string {
    return (
      (this.isDirectionLeft
        ? (Fraction(this.effectStart, this.effectEnd, this.scrollVariable) -
            1) *
          120
        : (1 -
            Fraction(this.effectStart, this.effectEnd, this.scrollVariable)) *
          120) + "%"
    );
  }
}
</script>

<style scoped lang="scss">
* {
  font-family: Montserrat, sans-serif;
}
.work-info {
  position: relative;
  height: 150vh;
  background: #121212;
  background: radial-gradient(
    circle at 100%,
    rgba(255, 71, 255, 0.527) 5%,
    #eee 35%,
    #121212 35%
  );
}
.work-container {
  position: relative;
  top: 10rem;
}

.work-card:hover {
  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 1) !important;
  background: rgba(22, 22, 22, 0.651);
}
</style>
