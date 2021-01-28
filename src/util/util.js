function dateTimeFormate (val, padd, format = 'yyyy-MM-dd HH:mm:ss') {
  val = val.toString()
  let date = new Date()
  if (Number(val)) {
    console.log(val, '---length---', val.length)
    if (val.length > 10) {
      date.setTime(Number(val))
    } else {
      date.setTime(Number(val) * 1000)
    }
  } else {
    date = new Date(val)
  }
  const year = date.getFullYear()
  const month = zeroPadding(date.getMonth() + 1)
  const day = zeroPadding(date.getDate())
  const hour = zeroPadding(date.getHours())
  const minute = zeroPadding(date.getMinutes())
  const second = zeroPadding(date.getSeconds())
  if (format === 'yyyy-MM-dd HH:mm:ss') {
    return `${year + padd}${month + padd}${day} ${hour}:${minute}:${second}`
  } else {
    return `${year + padd}${month + padd}${day}`
  }
}
function zeroPadding (num) {
  if (num < 10) {
    return '0' + num
  } else {
    return num
  }
}

export default {
  dateFormat: dateTimeFormate
}
