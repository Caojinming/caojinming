// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    isDelete:false,
    ontotal:[],
    total:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'cart',
      success: (res) => {
        var ontotal=[]
        for (var i = 0; i < res.data.length; i++) {
          var num = res.data[i].price * res.data[i].count
          ontotal.push(num)
        }
        var total=0
        for(var i=0;i<ontotal.length;i++){
          total += ontotal[i]
        }
        this.setData({
          cartList:res.data,
          isDelete:true,
          ontotal:ontotal,
          total:total
        })
      },
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

  },
  //清空购物车
  clearCart: function (res) {
    wx.showModal({
      title: '提示',
      content: '确定清空购物车吗?',
      cancelColor: '#000',
      confirmColor: '#f00',
      success: (res) => {
        //console.log(res)
        if(res.confirm)
        wx.removeStorage({
          key: 'cart',
          success:(res)=>{
            this.setData({
              isDelete: false,
              total: 0
            })
          },
        })
      }
    })
  },
  //删除一条
  removeitem:function(e){
    //console.log(e)
    var index = e.target.dataset.index;
    wx.getStorage({
      key: 'cart',
      success: (res) => {
        //console.log(res)
        res.data.splice(index, 1)
        var cartList =res.data
        //console.log(cartList)
        this.setData({
          cartList:cartList
        })
        wx.removeStorage({
          key: 'cart',
          success: function(res) {},
        })
        if(cartList.length>0){
          wx.setStorage({
            key: 'cart',
            data: cartList,
          })
          wx.getStorage({
            key: 'cart',
            success: (res) => {
              var ontotal = []
              for (var i = 0; i < res.data.length; i++) {
                var num = res.data[i].price * res.data[i].count
                ontotal.push(num)
              }
              var total = 0
              for (var i = 0; i < ontotal.length; i++) {
                total += ontotal[i]
              }
              this.setData({
                total: total
              })
            },
          })
        }else{
          this.setData({
            isDelete: false,
            total: 0
          })
        }
      },
    })
  },
  order:function(){
    console.log("确认下单?")
  }
})