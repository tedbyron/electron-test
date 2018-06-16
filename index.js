// modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

// global reference of the window object
let mainWindow

// method call after electron initialization
app.on('ready', createWindow)

// quit when all windows are closed unless platform is OS X
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // in OS X, re-create a window when dock icon is clicked and there are no other windows open
  if (mainWindow === null) {
    createWindow()
  }
})

function createWindow () {
  // create browser window
  mainWindow = new BrowserWindow({width: 1200, height: 800})

  // load index.html
  mainWindow.loadFile('index.html')

  // open devtools
  // mainWindow.webContents.openDevTools()

  // emitted when the window is closed
  mainWindow.on('closed', function () {
    // dereference the window object, store windows in an array if
    // there are multiple windows
    mainWindow = null
  })
}
