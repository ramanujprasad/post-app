# Post app description

An angular application that uses jsonplaceholder API to fetch 100 posts and render them all where each post in a separate component and displayed it as squares, 10 rows x 10 columns.

By default, you could see the post id on the screen. When clicking on a square, post id is replaced with the userId. When clicking again you could see the post id and so on.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

You could also access this application with already deployed [App URL](https://ramanujprasad.github.io/post-app/posts) at the bottom of this page.

## Library

Angular material has been used to display the information on tiles.

## Code branches
⋅⋅1. [main] (https://github.com/ramanujprasad/post-app/tree/main) - This branch has functionality developed without using any rxjs library.
..2. [feature/with-rxjs] (https://github.com/ramanujprasad/post-app/tree/feature/with-rxjs) - This branch has functionality using any rxjs library especially for loading state. Behaviour Subject has been used for maintaing the state.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
![Unit test report](https://github.com/ramanujprasad/post-app/blob/main/src/assets/unit-test.png)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
![e2e test report](https://github.com/ramanujprasad/post-app/blob/main/src/assets/e2e-test.png)

## Deployment and published URL

Application has been deployed on below URL using gh-pages.
[Post application link](https://ramanujprasad.github.io/post-app/posts)

![Post application](https://github.com/ramanujprasad/post-app/blob/main/src/assets/application.png)
