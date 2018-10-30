
const {app, BrowserWindow} = require('electron')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

//--------------------online ofline------------------------------------//

const { app, BrowserWindow, ipcMain } = require('electron')
  let onlineStatusWindow
  
  app.on('ready', () => {
    onlineStatusWindow = new BrowserWindow({ width: 0, height: 0, show: false })
    onlineStatusWindow.loadURL(`file://${__dirname}/index2.html`)
  })
  
  ipcMain.on('online-status-changed', (event, status) => {
    console.log(status)
  })

  //-----------------------------Client Request---------------->
  const request = net.request({
    method: 'GET',
    protocol: 'https:',
    hostname: 'github.com',
    port: 443,
    path: '/'
  })
  //---------------------------Cookies----------------------//

  const {session} = require('electron')
  session.defaultSession.cookies.get({}, (error, cookies) => {
    console.log(error, cookies)
  })
  
  session.defaultSession.cookies.get({url: 'http://www.github.com'}, (error, cookies) => {
    console.log(error, cookies)
  })
  const cookie = {url: 'http://www.github.com', name: 'mahesh', value: '12345'}
  session.defaultSession.cookies.set(cookie, (error) => {
    if (error) console.error(error)
  })

  //--------------------------ipcMain asyncrounous--------------------//
  const {ipcMain} = require('electron')
  ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) 
    event.sender.send('asynchronous-reply', 'hi')
  })
  
  ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) 
    event.returnValue = 'hi'
  })

  //-----------------------native image---------------------------//
  const {BrowserWindow, Tray} = require('electron')
  
  const appIcon = new Tray('/Users/somebody/images/icon.png')
  let win = new BrowserWindow({icon: '/Users/somebody/images/window.png'})
  console.log(appIcon, win)