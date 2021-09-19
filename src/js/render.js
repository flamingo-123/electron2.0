// let holder=document.querySelector("#holder")
// let read=document.querySelector("#read")
// let fs=require('fs')
// holder.addEventListener('drop',(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
//     for(const file of e.dataTransfer.files){
//         console.log(file);
//         console.log('文件路径:',file.path);
//         fs.readFile(file.path,(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//             let myDiv=document.createElement('div');
//             myDiv.className='readFile';
//             myDiv.innerHTML=`<h3>${file.name}</h3> <pre>${data}</pre>`;
//             read.appendChild(myDiv);
//         }
//         })
//      }
// })
// holder.addEventListener('dragover',(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
// })
let webview=document.querySelector('webview');
webview.addEventListener('did-start-loading',()=>{
console.log("正在加载中....");
})
webview.addEventListener('did-stop-loading',()=>{
    console.log("加载完毕....");
    console.log([webview]);
    })