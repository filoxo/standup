var menubar = require('menubar')

var mb = menubar({width: 300, height: 300})

mb.on('ready', function ready () {
  
  console.log('app is ready')

})

mb.on('after-create-window', function create() {
  mb.window.openDevTools();
})