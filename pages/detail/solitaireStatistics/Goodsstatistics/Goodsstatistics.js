// pages/detail/solitaireStatistics/Goodsstatixtics/Goodsstatistics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [{
      title: "手机1",
      people: "1",
      num: "1",
      pirce: "1.00"
    }],
    isShow:false,
    startTime:'',
    endTime:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.item))
    this.initData(JSON.parse(options.item));
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

  //初始化数据
  initData:function(datas){
    var _this = this;
    // _this.data.data.pickBeans.forEach(function(res){
    //   console.log(res)


    // })

    _this.setData({
      data:datas
    })

  },

  //显示详细
  showDetail:function(e){
    var _this = this;
    this.setData({
      isShow:!_this.data.isShow
    })
  }
})