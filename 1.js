let a2 = document.querySelector('.a2')
let zao = document.querySelector('.zao')
let time = new Date()
let hour = 23 - time.getHours();
let minute = 59 - time.getMinutes();
let qua = 60 - time.getSeconds()

let hour1 = time.getHours();
let minute1 = time.getMinutes();
let qua1 = time.getSeconds()
let timDiv = document.querySelector('.time')
let timDiv2 = document.querySelector('.times')
timDiv.innerHTML = "现在的时间是：" + hour1 + " : " + (minute1<10?'0'+minute1:minute1)+ " : " + (qua1<10?'0'+qua1:qua1) ;
timDiv2.innerHTML = "今天还剩：" + hour + "小时" + minute + "分钟" + qua + "秒";
setInterval(function () {
    let time = new Date()
    let hour = 23 - time.getHours();
    let minute = 59 - time.getMinutes();
    let qua = 60 - time.getSeconds()

    let hour1 = time.getHours();
    let minute1 = time.getMinutes();
    let qua1 = time.getSeconds()
    timDiv.innerHTML = "现在的时间是：" +( hour1<10?'0'+hour1:hour1) + " : " + (minute1<10?'0'+minute1:minute1) + " : " + (qua1<10?'0'+qua1:qua1) ;
    timDiv2.innerHTML = "今天还剩：" + hour + "小时" + minute + "分钟" + qua + "秒"

}, 1000)