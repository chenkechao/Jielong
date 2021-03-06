// pages/personal/mineJieLong/mineJieLong.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{},
    isShow:false,
    remind:"加载中，请稍后..."
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.initData();
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

  //自定义方法
  initData:function(){
    var _this = this;
    // wx.showLoading({
    //   title: '数据搜索中...',
    // })
    wx.request({
      url: app.globalData.domain + '/jielong/selectByUserId',
      method: "GET",
      data: { userId: wx.getStorageSync("userId") },
      success: function (res) {
        console.log(res)
        _this.remind = res.data.data.length ? "加载中，请稍后..." : "您还没有发起过Mart"
        //console.log(_this.remind)
        if (res.statusCode == 200 && res.data.data.length) {
          _this.setData({
            data: res.data.data,
            isShow: true,
          })
        } else {
          _this.setData({
            isShow: false,
            remind: _this.remind
          })
        }
      },
      fail: function (err) {
        _this.setData({
          isShow: false
        })
      },
      complete: function () {
        wx.hideLoading();
      }
    })
  },
  //
  navToDetail:function(e){
    console.log(e);
    wx.navigateTo({
      url: '../../detail/detail?id='+e.currentTarget.dataset.id +"&fromMine=1",
    })


  }
 

})