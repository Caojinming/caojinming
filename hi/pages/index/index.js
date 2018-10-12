// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperlist: [],
    barlist:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*轮播图 */
    wx.request({
      url: 'http://caojm.applinzi.com/swiperlist/list',
      data: {},
      method: "GET",
      dataType: "json",
      success: (res) => {
        this.setData({ swiperlist: res.data })
      },
      dail: (res) => {
        console.log("数据请求错误" + res)
      }
    })
    /*bar */
    wx.request({
      url: 'http://caojm.applinzi.com/swiperlist/barlist',
      data: {},
      method: "GET",
      dataType: "json",
      success: (res) => {
        this.setData({ barlist: res.data})
      },
      dail: (res) => {
        console.log("数据请求错误" + res)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})