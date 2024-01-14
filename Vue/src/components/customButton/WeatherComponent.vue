<script>
import cloud from '@/assets/image/cloudy.jpg';
import sun from '@/assets/image/sun.jpeg';
import sunCloudy from '@/assets/image/sunny.webp';
import rainy from '@/assets/image/rainy.jpg';
export default {
    props: {
        weatherData: {
            type: Object,
        }
    },

    data(){
    return{
      cloud: cloud,
      sun: sun,
      sunCloudy: sunCloudy,
      rainy: rainy,
      

    }
  },

    methods: {
        showArray() {
            console.log(this.weatherData.weatherElement);
            console.log(this.imageUrl);
        },
        changImg(item){
            const rain = item * 1;
            console.log(typeof rain);
            if (rain <= 10) {
                return this.sun;
            }else if(rain <= 20){
                return this.sunCloudy;
            }else if(rain <= 50){
                return this.cloud;
            }else{
                return this.rainy;
            }
            
        }
    },

}
/*
 備忘:
 天氣概況:this.weatherData.weatherElement[0].time[0].parameter.parameterName
 降雨機率:this.weatherData.weatherElement[1].time[0].parameter.parameterName
 最低溫度:this.weatherData.weatherElement[2].time[0].parameter.parameterName
 體感:this.weatherData.weatherElement[3].time[0].parameter.parameterName
 最高溫度:this.weatherData.weatherElement[4].time[0].parameter.parameterName
*/
</script>
<template lang="">

    <div class="container w-[800px] p-[10px] " :style="{backgroundImage: `url(${changImg(this.weatherData.weatherElement[1].time[0].parameter.parameterName)})`}">
        <div class="text-[30px] text-center font-black">{{ weatherData.locationName }}</div>
        <div class="flex justify-around p-[20px] font-bold">
            <span>{{ this.weatherData.weatherElement[0].time[0].parameter.parameterName }}</span>
            <span>降雨機率：{{ this.weatherData.weatherElement[1].time[0].parameter.parameterName }}%</span>
            <span>
                溫度：{{ this.weatherData.weatherElement[2].time[0].parameter.parameterName }}
                ~{{ this.weatherData.weatherElement[4].time[0].parameter.parameterName }}
            </span>
            <span>體感：{{ this.weatherData.weatherElement[3].time[0].parameter.parameterName }}</span>
        </div>

    </div>
        
    
</template>
<style scoped>
    .container{
        /* background-image: url('@/assets/image/cloudy.jpg'); */
        border-bottom: 3px solid #555;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>