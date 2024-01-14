<script>
// import MyButton from '@/components/customButton/MyButton.vue';
import CalcButton from '@/components/customButton/CalcButton.vue';

export default {
  components: {
    // MyButton,
    CalcButton,
  },
  // 放置所有變數的位置
  data() {
    return {
      numA: '',
      numB: '',
      result: 0,
      btnSwitch: false,
      html: `
        <div>
          我是html文字
        </div>
      `,
      calcType: ['+', '-', '*', '/'],
      calcNum: ['1','2','3','4','5','6','7','8','9','0']
    };
  },
  // 今天我開啟了這個網頁後先處理的事情
  mounted() {
console.log(123);
this.checkThis();
  },
  // 放置所有function的位置
  methods: {
    calcNumber(type) {
      // 先判斷numA numB 不為空
      if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
      // this.result = this.numA + this.numB;
      switch (type) {
        case '+':
        this.result = this.numA + this.numB;
          break;
        case '-':
        this.result = this.numA - this.numB;
          break;
        case '*':
        this.result = this.numA * this.numB;
          break;
        case '/':
        this.result = this.numA / this.numB;
          break;
      
        default:
          break;
      }
    },
    // 將子元件傳回來的值寫進主頁面data內
    fanalMath(money){

      this.result = money;
    },
    checkThis(){
      console.log(456);
    },
    addNum(item){
      if (!this.btnSwitch) {
        this.numA += item;
      }else{
        this.numB += item;
      }

   },
    changeSwitch(){
      this.btnSwitch = !this.btnSwitch;
      console.log(this.btnSwitch);
    },
    reset(){
      this.numA = '';
      this.numB = '';
      this.btnSwitch = false;
    }
  },
}
</script>

<template>
  <!-- v-if -->
  <!-- v-else-if -->
  <!-- v-else -->

  <!-- v-show -->

  <!-- v-for 記得要補:key -->

  <!-- v-html 最常用於所見即所得編輯器 -->

  <!-- v-bind 省略的寫法":" -->
  <!-- v-model => input與變數的連結 -->

  <!-- v-on 省略的寫法"@" 後面連接觸發的事件名稱 -->
  <div @click="checkThis()">
    點擊我
  </div>
  <div class="calc flex flex-col gap-5">
    計算機
    <div v-html="html"></div>
    <div>
      <label>
        數字A:
        <!-- v-model -->
        <input v-model="numA" type="number" readonly>
      </label>
      <button class="border-[#000] border-[2px] p-[5px]" type="button" @click="changeSwitch">Done</button>
    </div>
    <div>
      <label>
        數字B:
        <input v-model="numB" type="number" readonly>
      </label>
      <button class="border-[#000] border-[2px] p-[5px]" type="button" @click="reset">reset</button>
    </div>

    <div class="btns">
      <!-- 製作一個可以複用的，然後用:name把data的值帶入子元件內進行計算 -->
      <CalcButton :calc-type="calcType" :number-one="numA" :number-two="numB" @final-math = "fanalMath"/>
      <!-- 做出0~9的數字盤 他可以點擊之後會讓數字A加數字上去 -->
    </div>
    <div class="w-[200px] flex flex-wrap justify-center gap-[5px] p-[5px]">
      <!-- 數字可以做成陣列並利用v-for顯示數字0-9 接下來再編寫@click的function去加入numA裡面-->
      <button v-for="item in calcNum" :key="item.id" type="button" class=" rounded-full bg-sky-600 text-white w-[50px] h-[50px] flex items-center justify-center" @click="addNum(item)">{{ item }}</button>
    </div>
    <div class="output text-main-deep bg-blue-100">
      輸出結果: {{ result }}
    </div>
  </div>
  <div class="box">

  </div>
  <div class="text-red-800">
    預設顏色
  </div>
</template>

<!-- scoped: 目的是為了不要影響到其他區塊的style -->
<style lang="scss" scoped>
  .btns {
    @apply flex gap-[30px] ;
    .btn {
      @apply w-[50px] h-[50px] bg-slate-500 text-slate-50 rounded-lg text-xl;
    }
  }
  .box {
    @apply w-[300px] h-[300px] bg-[wheat] sm:w-[100px] sm:h-[100px] tablet:w-[200px];
  }
</style>
