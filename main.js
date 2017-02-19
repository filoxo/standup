var menubar = require('menubar')

var mb = menubar({width: 300, height: 150})

mb.on('ready', function ready () {
  
  console.log('app is ready')

})

mb.on('after-create-window', function create() {
  mb.window.openDevTools();
})