var n = 0

const tests = () =>{
  n ++
  console.log('======' +n)
}

var callbacks = []

const addCallBack = ($fun) =>{
  let a = callbacks;
  let i = a.indexOf($fun);
  if (i == -1) {
    callbacks.push($fun)
  }
}

const removeCallBack = ($fun) => {
  let a = callbacks;
  let i = a.indexOf($fun);
  if (i != -1) {
    a.splice(i, 1);
  }
}

const hasCallBack = ($fun) => {
  let a = callbacks;
  let i = a.indexOf($fun);
  return i == -1
}

const sendMsg = ($type, $data) => {
  let a = callbacks;
  for (let i = 0; i < a.length; i++) {
    let f = a[i];
    f($type, $data);
  }
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  tests: tests
}
