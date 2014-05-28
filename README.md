angularjs-loading-spinner [![Build Status](https://travis-ci.org/austingreco/angularjs-loading-spinner.svg?branch=master)](https://travis-ci.org/austingreco/angularjs-loading-spinner)
=========================

Very simple loading animation using AngularJS's $http interceptors.

Right now it simply sets `$rootScope.loading = true` while a request is in progress and `false` when not. Then you can show or hide an element based on this value:

```
<div class="loading-animation" ng-show="loading"></div>
```

## Running

Just run `npm start` after cloning the repo. You will need [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/). Gulp will create a web server at `http://localhost:9000`.

## Spinner CSS

CSS for the loading animation is from [SpinKit](http://tobiasahlin.com/spinkit/).

## License

Copyright (c) 2014 [Austin Greco](http://austingreco.com)

Licensed under [the MIT license](LICENSE)
