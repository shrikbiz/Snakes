# Git Jobs

You can visit the app by clicking [here](https://priceless-mcnulty-c9bfa0.netlify.app/)
This Respository is private. Please email at [shrikantpatel.js@gmail.com](shrikantpatel.js@gmail.com) with your github address to gain access of repository.

## About Git Jobs Project

This project was developed using Vue framework with Typescript as scripting language.
Dependancies used:

-   ### axios:

    axios was used for handling asynchronos call to APIs

-   ### vue-property-decorator

    This app have vue-class-component that helps with develop component class wise, however, I have used vue-property-decorator that is similart to v-s-c but is best implemented with Typescript classes. It provides decorators like @Components, @Emit, @Prop & @Watch

-   ### vue-router

    vue-router has been used as router library

-   ### vuetify

    Vuetify is a material design UI library (similar to Bootstrap or semantic UI library), that is helpfull in add designes to the application

-   ### vuex

    VueX us used as app store library that help in communication (exchanging data) between components

-   ### mocha

    Used mocha as unit testing library

-   ### chai

    Used chai as supporting testing library, that provides features like assertion, expect etc

-   ### @types

    For most of the dependancy library used, we need @types/<libraryName> devDependancy to intergrate components with Typescript

-   ### eslint

    For good coding practicies and make code readable, ESLint is used

-   ### typescript

    Base langugae used in Vue App

-   ### vuex-module-decorators

    Similar to vue-class-decorator, we need VueX-module-decorator for providing decorators like @Mutation, @Action & @MutationAction

This app was deployed on Netlify and used buddy.works to set Pipeline of the app. Used Git for version control. With Buddy.Works, a new build is created and deployed to the link provided for the app.

#### Note:

In real life production level app, an app has to be in dev env while development, then passed to test env for testing. If approved then only should be push to production env for users.

## App Features

-   Initally you will visit home page/front page, with some good CSS settings.
-   You can navigate to jobs search page by clicking the centerd button or Job Search tab on Navigation Bar.
-   on Navigation Bar you can find switch for light and dark theme. Check out how beautifully it changes the theme from Light to Dark or vice versa.
-   As you enter Job Search at top you will find searching area, below that there will be total result report display, and below that there will be result/all jobs available.
-   Jobs can be searched using two search boxed - First one can search paramteres like Job, company Name, position name or skills & secomd one will search with parameter as location. You either hit enter when you type or you can click search to trigger the search function.
-   Once you search, you will also find clear button that will clear the search bars and show all results.
-   The results shown will be in the form of cards. This cards show essential details about job like Job Title, Location, Company Name, Some text of the description, and Company's icon.
-   An app has to be scalable, so total number or results could be a long list, because of which, the number of results shown initally on search or entering the page will be limited and depend of the screen size. More results can be seen by clicking "view more" button at the bottom. If the search is done on a mobile or tablet sized screen, the inital result will be 8 max. If the search is done on small 13/16 inch laptop (720p/1080p) it will be 9 results. Any larger screen will have 10/12 results.
-   Job Title can be very long, so the cards will only show some part of the text. When users will hover on the text, user can see the whole Job Title.
-   You can click on the card (anywhere) to view the job data in details. That will open a Modal that will show all the data.
-   The Modal will have similar data to Card with details Job Description, How to apply and a Apply button to directly apply to position.
-   The app is responsive to the screen. As you will shrink, the view will change. The cards in row will change as per the size of the screen.
-   If screen is large, the Navigation Bar will have all App Icon, App Name, Tabs, and Theme Switch. If the screen is smaller, the Tabs and Theme Switch will hide in sidlable side bar. The button to open the side bar can be found next to Icon on Navigation Bar.

## Difficulties faced

-   The API provided is only accessible if App domain name/ server I am calling from is part of Git. This can be resolved using a middleware that can create proxy to fetch API and provide new API which can be used in the API. However, that was out scope since time was limited. As a quick fix I took the data which sits in App in Constant folder. The VueX store is fetching it from the file and using it as git API.
-   Unit tests has been performed on number of component's unit, however, for a app to have proper testing, we must also intergrate e2e testing, which according to me Cypress is best choice for the Vue bundle.
-   I was able to fetch user location's latlong & even their timezone(which btw will display in console), however, the lat-long had to be intergrated with google-maps libraries using googleAPIs. However, due to some authentication issues of app in google cloud, the key provided by google maps was not working and APIs were failing. Because of that, feature of locating geolocation of user was dropped.
