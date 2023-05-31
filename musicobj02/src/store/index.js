import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist:[   //音乐播放列表
      {
        name: "断桥残雪", 
        id: 167937, 
        al:{
          id: 16960,
          name: "断桥残雪",
          pic: 19061133579343590,
          picUrl: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
          pic_str: "19061133579343591",
        }
      } 
    ],
    lyric:"666",
    playCurrentIndex:0,
    islogin:false
  },
  getters: {
  },
  mutations: {
    setPlayList(state,value){//定义一个函数修改歌单列表数据
      state.playlist = value;
    },
    setPlayIndex(state,value){//定义一个函数修改下标
      state.playCurrentIndex = value;
    },
    setPlayLyric(state,value){//定义一个函数修改歌词
      state.lyric = value;
    },
    pushPlayLyric(state,value){//定义一个函数修改歌词
      state.playlist.push(value);
    }
  },
  actions: {
  },
  modules: {
  }
})
