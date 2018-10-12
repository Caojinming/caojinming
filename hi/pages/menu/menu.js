// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: 0,
    isScroll: false,
    toView: '新品',
    cartoN:true,
    menuname:[],
    menumore:[],
    lidlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://caojm.applinzi.com/menu/menuname',
      success: (res) => {
        this.setData({ menuname : res.data})
      }
    });
    wx.request({
      url: 'http://caojm.applinzi.com/menu/menumore?id=new',
      success: (res) => {
        this.setData({ menumore: res.data.msg })
      }
    });
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

  },
  switchTab(e) {
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.name,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)
    var id = e.target.dataset.id
    wx.request({
      url: 'http://caojm.applinzi.com/menu/menumore?id='+id,
      success: (res) => {
        this.setData({ menumore: res.data.msg})
      }
    })
  },
  addCart: function (res) {
    var cart = wx.getStorageSync("cart");
    if (!cart) {
      var cart = [];
    }
    cart.push(res.target.dataset)
    // for(var i=0;i<cart.length;i++){
    //   if(cart[i].lid=res.target.dataset.lid){
    //     cart[i].count+=1
    //   }
    // }
    wx.setStorage({
      key: 'cart',
      data: cart,
    })
  },
  showCart:function(){
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  }
})