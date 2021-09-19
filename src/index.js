const { app, BrowserWindow,ipcMain, dialog} = require('electron');
const path = require('path');
const { title } = require('process');
ipcMain.on('openArt',(e,arg)=>{
  cWindow('https://artsandculture.google.com/');
 
})
ipcMain.on('openWeKi',(e,arg)=>{
  cWindow('https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5');
 
})
ipcMain.on('TransLation',(e,arg)=>{
  cWindow('https://translate.google.cn/');
 
})

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
const cWindow = (url) => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
    nodeIntegration:true,
    contextIsolation:false,
    webviewTag:true
    }
  });
  mainWindow.loadURL(url);

};
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
    nodeIntegration:true,
    contextIsolation:false,
    webviewTag:true
    }
  });

  mainWindow.loadFile(path.join(__dirname, './index/index.html'));
  mainWindow.webContents.openDevTools();
  //openFile  允许选择文件；
  //openDirectory 允许选择文件
  //multiSelection 允许多选
  //showHiddenFiles 显示隐藏文件
  //createDirectory 允许创建文件夹
  // setTimeout(()=>{
  //   dialog.showOpenDialog({
  //     properties:['openFile','multiSelections']
  //   }).then((result)=>{
  //     console.log(result.filePaths)
  //   })
  // },2000)
  // mainWindow.on('close',(e)=>{
  //   e.preventDefault();
  //   e.stopPropagation();
  //   dialog.showMessageBox(mainWindow,{
  //     type:'warning',
  //     title:'关闭',
  //     message:'是否要关闭',
  //     buttons:["取消","关闭"]
  //   }).then((index)=>{
  //     if(index.response==1){
  //       app.exit()
  //     }
  //   })
  // })
 
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

