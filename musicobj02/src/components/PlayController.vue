<template>
    <div class="playController">
        <div class="left">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="" @click="show=!show">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].name}}</div>
                <div class="tips">横划可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg v-if="pause" class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-bofang1"></use>
            </svg>
            <svg v-else class="icon" aria-hidden="true" @click="play">
                <use xlink:href="#icon-iconstop"></use>
            </svg>
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-liebiao1"></use>
            </svg>
        </div>
        <play-music :play="play" v-show="show" :pause="pause"  :playDetail="playlist[playCurrentIndex]"  @back="show=!show"></play-music>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"></audio>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import playMusic from "@/components/PlayMusic.vue"
    export default{
        name:"playcontroller",
        data(){
            return{
                pause:true,
                show:false
            }
        },
        computed:{
            ...mapState(['playlist','playCurrentIndex'])
        },
        methods:{
            play(){
                //paused查看当前歌曲是否是暂停
                if(this.$refs.audio.paused){
                    this.$refs.audio.play();
                    this.pause=false;
                }else{
                    this.$refs.audio.pause();
                    this.pause=true;
                }
                
            },
        },
        components:{
            playMusic
        }
    }

    
</script>



<style lang="less">
        .playController {
            background: #fff;
            width: 7.5rem;
            height: 1.2rem;
            position: fixed;
            left: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #ccc;
        
            .left {
                display: flex;
                padding: 0 0.2rem;
        
                img {
                    width: 0.8rem;
                    height: 0.8rem;
                    border-radius: 0.4rem;
                }
        
                .content {
                    padding: 0 0.2rem;
        
                    .tips {
                        font-size: 0.2rem;
                        color: #999;
                    }
                }
            }
        
            .right {
                .icon {
                    width: 0.4rem;
                    height: 0.4rem;
                    margin: 0 0.2rem;
                }
            }
        }
        </style>