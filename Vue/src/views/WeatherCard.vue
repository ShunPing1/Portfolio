<script>
// import WeatherComponent from '@/components/customButton/WeatherComponent.vue';
import WeatherComponent from '@/components/customButton/WeatherComponent.vue';
import WeatherSlot from '@/components/customButton/WeatherSlot.vue';

export default {
    components: {
        WeatherComponent,
        WeatherSlot,
    },
    data() {
        return {
            weatherAPI: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2497FEFB-378D-4EE8-B9BE-C99ACEB8E680',
            catchData: [],
            // place:['北部','中部','南部','東部','離島']
            place: [
                {
                    id: 1,
                    name: '全台',
                },
                {
                    id: 2,
                    name: '北部',
                },
                {
                    id: 3,
                    name: '中部',
                },
                {
                    id: 4,
                    name: '南部',
                },
                {
                    id: 5,
                    name: '東部',
                },
                {
                    id: 6,
                    name: '離島',
                }],

            placeID: 1,
            north: ['基隆市','臺北市','新北市','桃園市','新竹縣','新竹市','宜蘭縣'],
            center: ['苗栗縣','臺中市','彰化縣','南投縣','雲林縣'],
            south:['嘉義縣','嘉義市','高雄市','臺南市','屏東縣','澎湖縣'],
            east:['花蓮縣','臺東縣'],
            island:['金門縣','連江縣'],
            watchInput: '',
            watchCheck: false,


        }
    },
    // 網頁載入時抓取API
    mounted() {
        fetch(this.weatherAPI)
            .then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(data.records.location);
                this.catchData = data.records.location;
            });
    },
    computed: {
        filterPlace() {
            return this.catchData.filter((item) => {
                if (this.placeID === 1) {
                    return true;
                }else if (this.placeID === 2){
                    return this.north.includes(item.locationName);
                }else if (this.placeID === 3){
                    return this.center.includes(item.locationName);
                }else if (this.placeID === 4){
                    return this.south.includes(item.locationName);
                }else if (this.placeID === 5){
                    return this.east.includes(item.locationName);
                }else{
                    return this.island.includes(item.locationName);
                }
            })
        }
    },
    methods: {
        showData() {
            console.log('weather data:', this.catchData[0]);
        },

    },
    watch:{
        watchInput:{
            handler(){
                if (this.watchInput === '123') {
                    this.watchCheck = true;
                }else{
                    this.watchCheck = false;
                }
            }
        }
    }
}
</script>
<template lang="">
    <input v-model="watchInput" type="text">
    <input v-model="watchCheck" type="checkbox">
    {{ watchCheck }}
    <div class="flex gap-[5px]">
        <div v-for="item in place" :key="item.id" class="hover:bg-[#9bdff0]">
            <WeatherSlot :place-btn="item" @click="placeID = item.id"></WeatherSlot>
        </div>
    </div>
    <div v-for="item in filterPlace" :key="item.id" >
        <WeatherComponent :weather-data="item">
        </WeatherComponent>
    </div>

</template>
<style lang="">
    
</style>