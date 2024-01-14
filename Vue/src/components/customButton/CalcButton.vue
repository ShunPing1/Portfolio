<script>
export default {
  // 從主頁面接收到值
  props:{
    calcType:{
      type:Array,
    },
    numberOne:{
      type:String,
    },
    numberTwo:{
      type:String,
    },
    
  },
  // 要回傳給主頁面的方法
  emit:['finalMath'],
  // 如果接進來的值需要做修改可以在data內轉換，或是要定義變數
  data() {
    return {
      type: this.calcType ?? [],
      result:0,
    }
  },
  methods: {
    enterCalc(type) {
  // 先判斷numA numB 不為空
  if (this.numberOne.toString().trim() === '' || this.numberTwo.toString().trim() === '') return;
      switch (type) {
        case '+':
        this.result = (this.numberOne * 1) + (this.numberTwo * 1);
          break;
        case '-':
        this.result = (this.numberOne * 1) - (this.numberTwo * 1);
          break;
        case '*':
        this.result = (this.numberOne * 1) * (this.numberTwo * 1);
          break;
        case '/':
        this.result = (this.numberOne * 1) / (this.numberTwo * 1);
          break;
      
        default:
          break;
      }
      // 利用剛剛的要傳回主頁面的emit的文字將結果傳回主頁面
      this.$emit('finalMath',this.result);
    },
  },
};
</script>
<!-- html -->
<template>
  112233
  <!-- 帶入主頁面的值並且進行顯示或是有作用 -->
  <!-- <section id="myBtn">
    <button v-for="item in type" :key="item.id" class="btn" type="button" @click="enterCalc(item)">
      {{ item }}
    </button>

  </section> -->
</template>

<style lang="scss" scoped>
#myBtn {
  @apply flex  gap-5;
  .btn {
    @apply border-[black] border-[3px] py-[5px] px-[10px] hover:text-[blue] bg-red-900;
  }
}
</style>