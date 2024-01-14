<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button
-->

<script>
import Swal from 'sweetalert2'


export default {
  data() {
    return {
      width: '0%',
      addText: '',
      endTime: '',
      toDoListArr: [
        {
          id: 1,
          toDo: '項目一',
          // 編輯開關
          editIng: false,
          checkThis: false,
          logTime: '2024-01-04',
          endTime: '2024-01-13',
          // 編輯後的文字
          newToDo: '',
          toDoListLength: 0,
        }
      ],
      arr: [1, 2, 3, 4, 5]

    };
  },
  // 載入網頁時就執行的函式
  mounted() {
    if (sessionStorage.getItem('toDoList')) {
      this.toDoListArr = JSON.parse(sessionStorage.getItem('toDoList'));
    } else {
      sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr));
    }
  },
  methods: {
    addList() {
      Swal.fire({
        title: "確認是否輸入",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {

          let date = new Date().toISOString().split('T');
          console.log(date[0]);
          if (!this.addText || !this.endTime) {
            return Swal.fire({
              title: "請輸入事項以及結束日期",
              icon: "error"
            });
          }
          const contentId = this.toDoListArr.length;
          this.toDoListArr.push({
            id: contentId + 1,
            toDo: this.addText,
            // 編輯開關
            editIng: false,
            checkThis: false,
            logTime: date[0],
            endTime: this.endTime,
            // 編輯後的文字
            newToDo: '',
            // 陣列長度(進度條寬)

          });
          this.addText = '';
          console.log('length', this.toDoListArr.length, this.toDoListArr);
          sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr));

          Swal.fire({
            title: "輸入成功",
            icon: "success"
          });
        }
      });

    },
    // 刪除功能
    deleteList(id) {
      Swal.fire({
        title: "是否要刪除事項",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "確認",
        cancelButtonText: "取消",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(id);
          // 使用filter儲存點選id的其它結果
          const deleteResult = this.toDoListArr.filter(item => item.id !== id);
          this.toDoListArr = deleteResult;
          console.log(deleteResult);
          // 將原本toDoListArr的暫存資料改為deleteResult
          sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr))

          Swal.fire({
            title: "刪除成功",
            icon: "success"
          });
        }
      });
    },

    // 編輯功能
    editStart(item) {
      // 將編輯開關打開
      item.editIng = !item.editIng;
      // 將原本的事項內容存進新的事項內容中
      item.newToDo = item.toDo;
    },
    editFinish(item) {
      item.editIng = !item.editIng;
      item.toDo = item.newToDo;
      sessionStorage.setItem('toDoList', JSON.stringify(this.toDoListArr));
    },
    // 更改進度條
    changePB(item) {
      // 切換checkThis狀態
      item.checkThis = !item.checkThis;
      console.log(item.checkThis);
      // 宣告一個紀錄checkThis為true的變數
      let checkTrueCount = 0;
      // 將所有checkThis為true的結果存進Alltrue變數中
      const Alltrue = this.toDoListArr.filter(item => item.checkThis == true);
      console.log(Alltrue);
      // 宣告一個目前項目總數的變數
      const toDoListLength = this.toDoListArr.length;
      // 將checkTrueCount與Alltrue(儲存checkThis為true的陣列)長度進行綁定
      checkTrueCount = Alltrue.length;
      // 將進度條的寬度進行計算:((checkThis為true的總數 / 目前項目總數)*100)
      this.width = ((checkTrueCount / toDoListLength )*100)+'%';
      

      sessionStorage.setItem('allTrue', JSON.stringify(this.Alltrue));
    }
  },
};

</script>

<template>
  <!-- 在使用漸層色的時候，要注意色調有要連續性 -->

  <div
    class="w-full h-[100vh] bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-500 flex items-center justify-center font-big">
    <!-- 進度條 -->
    <div class="w-[70%] bg-white rounded-md pt-2">
      <div class="w-[60%] border-[2px] border-[#000] rounded-full overflow-hidden m-auto">
        <div class="h-[20px] rounded-full bg-gradient-to-r from-[#0fa] to-[#0af]" :style="{ width: width }"></div>
      </div>
      <div class="flex items-center justify-center border-b-2 gap-5">
        <input v-model="addText" type="text" class="w-full h-10 ml-3 border-2" placeholder="請填寫事項">
        <input type="date" v-model="endTime" class="w-[200px]">
        <button class="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl m-3 text-white text-xl"
          type="button" @click="addList()"><font-awesome-icon :icon="['fas', 'file-import']" /></button>
      </div>
      <div class="overflow-y-scroll h-[200px]">
        <div class="lists flex items-center border-b-2">
          <span class="list flex-[1] text-center">選取</span>
          <span class="list flex-[3] text-center">清單內容</span>
          <span class="list flex-[2] text-center">開始日期</span>
          <span class="list flex-[2] text-center">結束日期</span>
          <span class="list flex-[1] text-center">刪除</span>
        </div>
        <div v-for=" item in toDoListArr" :key="item.id" class="flex items-center justify-between gap-5 border-b-2"
          :class="{ 'text-[#faa]': item.checkThis }">
          <input class="ml-[30px]" type="checkbox" v-model="item.checkThis" @click="changePB(item)">
          <div v-if="!item.editIng" class="w-[200px] text-center" @click="editStart(item)">
            {{ item.toDo }}
          </div>
          <input v-else type="text" v-model="item.newToDo" @blur="editFinish(item)">
          <div>{{ item.logTime ?? '' }}</div>
          <div>{{ item.endTime }}</div>
          <button button class="bg-gradient-to-b from-red-500  to-orange-500 p-3 rounded-xl m-3 text-white" type="button"
            @click="deleteList(item.id)"><font-awesome-icon :icon="['fas', 'trash-can']" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped="scss"></style>