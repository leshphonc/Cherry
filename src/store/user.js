import { observable, action } from 'mobx'

class User {
  @observable id = '5201314'
  @observable avatar = 'http://img2.touxiang.cn/file/20180302/de781e4f408909cfff0d7083ebcf72e6.jpg'
  @observable nickname = '你的太阳啊'
  @observable gender = '女'
  @observable age = '21'
  @observable birthday = '1998-01-01'
  @observable area = '浙江 杭州'
  @observable phone = '18080808080'
  @observable signature = '个性签名，个性签名，个性签名，个性签名，个性签名，个性签名，个性签名。。个性签名。。。'
  @observable balance = '12800'
  @observable income = '8000'
  @observable certifications = false
  @observable invitebadge = true
  @observable fans = '63930'
  @observable follow = '70'
  @observable discovery = '130'
  @observable photos = ['http://5b0988e595225.cdn.sohucs.com/images/20171207/60918cbd27fe4642b2b68668f450abed.jpeg', 'http://uploads.gz2010.cn/allimg/1712/56-1G223150G2-51.jpg', 'http://image.biaobaiju.com/uploads/20180211/00/1518281788-xmNoYwiyBV.jpg']
  @observable video = {
    videoUrl: 'http://video.pearvideo.com/mp4/adshort/20181101/cont-1467590-13163020_adpkg-ad_hd.mp4',
    videoCover: 'http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png',
  }
  @observable balancedetail = [{
    title: '音视频通话',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }, {
    title: '礼物',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }, {
    title: '兑换',
    day: '08月28日',
    time: '17 : 30',
    value: '+50',
  }, {
    title: '充值',
    day: '08月28日',
    time: '17 : 30',
    value: '+50',
  }, {
    title: '音视频通话',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }, {
    title: '音视频通话',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }]
  @observable incomedetail = [{
    title: '音视频通话',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }, {
    title: '礼物',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }, {
    title: '兑换',
    day: '08月28日',
    time: '17 : 30',
    value: '+50',
  }, {
    title: '充值',
    day: '08月28日',
    time: '17 : 30',
    value: '+50',
  }, {
    title: '音视频通话',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }, {
    title: '音视频通话',
    day: '08月28日',
    time: '17 : 30',
    value: '-50',
  }]
  @observable fanslist = [{
    id: '3',
    avatar: 'http://uploads.gz2010.cn/allimg/1712/56-1G223150G2-50.jpg',
    nickname: '一只大白喵',
    gender: '男',
    age: 18,
    birthday: '1998-01-01',
    area: '杭州 江干',
    phone: '18080808080',
    signature: '个性签名',
    certifications: true,
    fans: '41',
    follow: '32',
    photos: [],
    video: {
      videoUrl: 'http://video.pearvideo.com/mp4/adshort/20181101/cont-1467590-13163020_adpkg-ad_hd.mp4',
      videoCover: 'http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png',
    },
    attention: false,
    lasttime: '24',
  }, {
    id: '2',
    avatar: 'http://image.biaobaiju.com/uploads/20180211/00/1518281788-xmNoYwiyBV.jpg',
    nickname: '一只大白喵',
    gender: '男',
    age: 18,
    birthday: '1998-01-01',
    area: '杭州市',
    phone: '18080808080',
    signature: '个性签名',
    certifications: false,
    fans: '41',
    follow: '32',
    photos: [],
    video: {
      videoUrl: 'http://video.pearvideo.com/mp4/adshort/20181101/cont-1467590-13163020_adpkg-ad_hd.mp4',
      videoCover: 'http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png',
    },
    attention: true,
    lasttime: '11',
  }, {
    id: '1',
    avatar: 'http://img.zcool.cn/community/01db445752ec3c6ac72525ae3786b7.png@1280w_1l_2o_100sh.png',
    nickname: '一只大白喵',
    gender: '女',
    age: 18,
    birthday: '1998-01-01',
    area: '杭州 江干',
    phone: '18080808080',
    signature: '个性签名',
    certifications: true,
    fans: '41',
    follow: '32',
    photos: [],
    video: {
      videoUrl: 'http://video.pearvideo.com/mp4/adshort/20181101/cont-1467590-13163020_adpkg-ad_hd.mp4',
      videoCover: 'http://124.129.157.208:8889/data/uploads/kecheng/2018/01/18/5a600b2c99836.png@0o_0l_220w.png',
    },
    attention: false,
    lasttime: '24',
  }]
  @observable followlist = []

  @action.bound update(key, date) {
    this[key] = date
  }
}

export default new User()
