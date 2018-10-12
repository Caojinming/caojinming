Page({
  data: {
    date: '',
    time: '',
    region: ['北京市', '北京市', '北京市']
  },
  onLoad: function (options){
    var date=new Date()
    date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    var time=new Date()
    time = `${time.getHours()}:${time.getMinutes()}`
    this.setData({
      date:date,time:time
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})