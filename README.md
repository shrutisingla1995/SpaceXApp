# SpaceXapp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

A sample application that displays all launches by SpaceX program.
The spaceXdata filter service fetches the selected result for launches, landing and in which year that was happened. User is able to Filter the results with help of provided Filters which can be seen in left tile layout and other tiles shows the filtered results.

# Project Setup
Run these commands:-

1. git clone https://github.com/shrutisingla1995/SpaceXApp.git
2. cd SpaceXApp
3. npm install
4. ng serve --aot

# Demo
![Demo](https://github.com/shrutisingla1995/SpaceXApp/blob/master/images/screencast.gif)
![image](https://github.com/shrutisingla1995/SpaceXApp/blob/master/images/screenshot1.PNG)
![image](https://github.com/shrutisingla1995/SpaceXApp/blob/master/images/screenshot2.PNG)

# Responsive Layout
	Mobile View: Page should have only one Column until 700 px. We have provided the Visual designs for Mobile screen.
	Tablet View: Page should have 2 columns between 700 and 1024 px. Design is provided for Desktop tile and that should be followed for this viewport.
	Desktop View: Page should have 4 columns between 1024 and 1440 px. Beyond 1440px viewport,  the content will be centered align with a max width of 1440.
![Demo](https://github.com/shrutisingla1995/SpaceXApp/blob/master/images/screencast2.gif)

# SRR Setup (Server side rendering)
The server has delivered a completely static HTML page with all elements in pure SSR.
1. `ng add @nguniversal/express-engine --clientProject SpaceXapp`
2. `npm run dev:ssr`

Available on:
http://localhost:4201/

# PWA Setup (Progressive web application)

1. Adding PWA
`ng add @angular/pwa`
The above command automatically add PWA files and features inside an Angular app:

The manifest.webmanifest file
The ngsw-config.json service worker
Varying sizes of icons inside the assets/icons directory

2. Configure Production Build with http-server
`npm install -g http-server`
3. Build the app for production environment
`npm build --prod`
4. Serve the angular PWA using the http-server
`cd dist/SpaceXapp`
5. Start the prod build
`http-server -o`

Available on:
http://127.0.0.1:8080
http://192.168.0.102:8080

## LIGHTHOUSE SCORE

1. Performance: 84
2. Accessibility: 66
3. Best Practices: 100
4. SEO: 83
5. PWA : Active

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
