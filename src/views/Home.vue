<template>
  <div class="home">
    <div>{{1611828000000 | dateFormat('-')}}</div>
    <div>{{1611828000000 | dateFormat('-','')}}</div>
    <div>{{new Date() | dateFormat('-','')}}</div>
    <div>{{new Date().setDate(new Date().getDate() - 10) | dateFormat('-')}}</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    dateTimeFormate (val, padd, format = 'yyyy-MM-dd HH:mm:ss') {
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
      const month = this.zeroPadding(date.getMonth() + 1)
      const day = this.zeroPadding(date.getDate())
      const hour = this.zeroPadding(date.getHours())
      const minute = this.zeroPadding(date.getMinutes())
      const second = this.zeroPadding(date.getSeconds())
      if (format === 'yyyy-MM-dd HH:mm:ss') {
        return `${year + padd}${month + padd}${day} ${hour}:${minute}:${second}`
      } else {
        return `${year + padd}${month + padd}${day}`
      }
    },
    zeroPadding (num) {
      if (num < 10) {
        return '0' + num
      } else {
        return num
      }
    }
  },
  created () {
    console.log('process.env', process.env)
    const date = this.dateTimeFormate(1611828000000, '-')
    const date1 = this.dateTimeFormate(new Date().setDate(new Date().getDate() - 10), '/', 'yyyy-MM-dd')
    console.log('date ------>', date)
    console.log('date ------>', date1)
  }
}
</script>

<style lang="scss" scoped>
.home{
  .text{
    width: 500px;
    line-height: 32px;
    color: $themeColor;
    background-color: $themeBgColor;
    @include textEllipsis;
    margin: 0 auto;
  }
  .text1{
    width: 500px;
    line-height: 32px;
    @include textSomeEllipsis(3);
    margin: 0 auto;
  }
}
</style>
