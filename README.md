# **diet-jade**
Jade template engine plugin for [diet][2] based on [Jade][1]. Support for sending data to view through `$.data.PARAM` and displayed via `#{PARAM}`.

## **Learn about Jade**:
Learn how to use it at the engine's website:
- **Website:** [http://jade-lang.com/](http://jade-lang.com/)

## **Install**

```
npm install diet-jade
```

[![NPM](https://nodei.co/npm/diet-jade.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/diet-jade/)

## **Example Usage**
**index.js**

```js
// Require Diet server
var server = require('diet')
// Require diet-jade plugin
var jade = require('diet-jade')({path: app.path + '/static/jade/'})

// Instantiate server
var app = server()
// Set server listening port
app.listen('http://localhost:8000')

// Assign jade plugin to the header
app.header(jade)

// Create a route
app.get('/', function($) {
  // Render jade file! this will render ./yourConfiguredDirectory/index.jade
  $.data.message = 'This is awesome!'
  $.render('index')
})

app.get('/profile', function ($) {
  // Render jade file! this will render ./.../yourConfiguredDirectory/profile.jade
  $.render('profile')
})
```

**~/.../static/jade/index.jade**

```
p Received message: #{message}
```


## **File Rendering**

```js
$.render('yourFile') // will serve yourConfiguredDirectory/yourFile.jade

$.render('yourFile.jade') //wil serve yourConfiguredDirectory/yourFile.jade
```

## **License**
Please refer to [The License](./license).

[1]: http://jade-lang.com/
[2]: http://dietjs.com/
