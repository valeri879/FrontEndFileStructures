# Front end file structures

This project is basic template for front end developers, with perfect file structrues using gulp.js, npm and bower

  - You can also use npm and bower libraries 
  - See HTML in the right
  - Magic

```
project

└── assets
    ├── css
    │   ├── build
    │   └── src
    ├── fonts
    │   └── fontName
    ├── img
    ├── js
    │   ├── build
    │   │   ├── libs
    │   │   ├── plugins
    │   │   └── view
    │   │       ├── about
    │   │       ├── contact
    │   │       └── main
    │   └── src
    │       ├── libs
    │       ├── plugins
    │       └── view
    │           ├── about
    │           ├── contact
    │           └── main
    └── sass
        ├── components
        ├── fonts
        ├── libs
        ├── mixins
        ├── plugins
        └── vendors
             
```


### Tech

FrontEndFileStructures uses a number of open source projects to work properly:

* [SASS](http://sass-lang.com/) - CSS with superpowers.
* [node.js](https://nodejs.org/en/) - evented I/O for the backend.
* [NPM](https://www.npmjs.com/) - Build amazing things.
* [Bower](https://bower.io/) - A package manager for the web.
* [Gulp](http://gulpjs.com/) - the streaming build system.

And of course this project itself is open source with a [FrontEndFileStructures](https://github.com/valeri879/FrontFileStrucutres)
 on GitHub.

### Installation

## Using Bower.io
```sh
$ bower install --save front-end-file-structures
```

This project requires [Node.js](https://nodejs.org/) v4+ to run.
Download and extract the [latest pre-built release](https://github.com/valeri879/FrontFileStrucutres/archive/master.zip).

Install the dependencies and devDependencies and start the server.

```sh
$ cd FrontFileStrucutres
$ npm install
```

Install bower

```sh
$ npm install -g bower
```
Install bower dependencies and devDependencies
```sh
$ bower install
```
### Gulpfile.js Plugins

FrontEndFileStructures is currently extended with the following plugins

* gulp
* gulp-sourcemaps
* gulp-sass
* gulp-uglify
* gulp-minify-css
* gulp-ignore
* gulp-htmlmin
* gulp-rename
* gulp-watcer

### Development

Want to contribute? Great!

FrontEndFileStructures uses Gulp for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

Run Gulp Watcher:
```sh
$ gulp watcher
```

sass:
```sh
$ gulp sass
```

minify css:
```sh
$ gulp minify-css
```

compress js:
```sh
$ gulp compress-js
```


License
----

MIT


**Free Software, Hell Yeah!**
