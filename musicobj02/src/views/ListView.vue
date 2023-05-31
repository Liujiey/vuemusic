<template>
    <div>
        <!-- 歌单详情 -->
        <listview-top :music="music.playlist"></listview-top>
        <!-- 歌曲列表 -->
        <play-list :music="music.playlist"></play-list>
    </div>
</template>



<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getListview} from "@/api/index"
import listviewTop from "@/components/ListViewTop.vue"
import playList from '../components/PlayList.vue';
import store from '@/store';
    export default{
        name:"listview",
        setup(){
            var id = ""
            var route = useRoute();

            var music = reactive({
                list:[],
                playlist:{
                    creator:{  },
                    tracks:[]
                },
                
            })
            onMounted(()=>{
                id =route.query.id;
                console.log(id);
            })
            onMounted(async()=>{
                var res = await getListview(id);
                music.playlist = res.data.playlist
                store.commit("setPlayList",music.playlist.tracks);
            })
            return { music }
        },
        
        components:{
            listviewTop,
            playList
        }
        
    }
</script>