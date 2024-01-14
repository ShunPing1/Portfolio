<template lang="">
    <div>
        <input type="file" accept=".jpg,.png" @change="UploadPic">
        <button type="button">上傳圖片</button>
        <img :src="fileSrc" alt="">
        <div v-if="!this.testIng" @click="testFn">test</div>
        <div v-else @click="testFn">{{ test }}</div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            picFile:'',
            fileSrc:'',
            test:'test',
            testIng: false,
        }
    },
    methods: {
        UploadPic(event){
            this.picFile = event.target.files[0];
            console.log(this.picFile);
            if (this.picFile) {
                const reader = new FileReader();
                reader.readAsDataURL(this.picFile);
                reader.onload = (e) => {
                    console.log(e.target);
                    this.fileSrc = e.target.result;
                    this.imgFile = [
                        {
                            name:this.picFile.name,
                            path:this.fileSrc,
                        }
                    ]
                }
            }


        },

        testFn(){
            this.testIng = !this.testIng;
            this.test = '111';
        },
    },
}
</script>
<style lang="">
    
</style>