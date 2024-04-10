<template>
  <main class="main">
    <div class="todoListBox">
      <div class="header-box">
        <div class="header-left">
          <div class="plusicon">+</div>
          <h1>Todo List</h1>
        </div>
        <div class="header-right">
          <button class="headerAllSelect" @click="handleSelect">全選</button>
          <button class="headerAdd" @click="handleAdd">添加</button>
        </div>
      </div>
      <div class="content">
        <div class="content-item" v-for="item in todoList" :key="item.id">
          <!-- 點選 -->
          <div class="content-left" @click="handleSelecet(item.id)">
            <span :style="item.isCheck ? 'opacity:1' : 'opacity:0'"></span>
          </div>

          <!-- 輸入 -->
          <input
            type="text"
            class="content-input"
            v-model="item.text"
            :disabled="item.isCheck"
            :class="item.isCheck ? 'Line-through' : ''"
          />

          <!-- 時間 -->
          <div class="content-right">
            <p>{{ item.time }}</p>
            <button class="deletebutton" @click="handleDelete(item.id)">
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import dayjs from "dayjs"; // 导入 Day.js
import "dayjs/locale/zh-tw"; // 引入台湾时区

dayjs.locale("zh-tw"); // 设置时区为台湾时区

export default {
  data() {
    return {
      todoList: [],
    };
  },

  methods: {
    //動態生成隨機id
    randomID() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    //全選功能

    handleSelect() {
      const allSelected = this.todoList.every((item) => item.isCheck);
      this.todoList.forEach((item) => {
        item.isCheck = !allSelected;
      });
    },

    // 添加功能
    handleAdd() {
      this.todoList.unshift({
        id: this.randomID(),
        isCheck: false, // 是否選中
        text: "", // input框內容
        time: dayjs().format("YYYY-MM-DD HH:mm:ss"), //獲取時間內容
      });
    },

    //選中功能
    handleSelecet(id) {
      const index = this.todoList.findIndex((item) => item.id === id);

      return (this.todoList[index].isCheck = !this.todoList[index].isCheck);
    },

    // 刪除功能
    handleDelete(id) {
      // 使用findIndex方法找到要删除的元素的索引
      const index = this.todoList.findIndex((item) => item.id === id);

      return this.todoList.splice(index, 1); // 使用splice方法从数组中删除找到的元素
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  color: white;
  margin-left: 10px;
  width: 80px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
}

.headerAllSelect {
  background: #c43f38;
}
.headerAdd {
  background: #70b870;
  margin-right: 20px;
}

.deletebutton {
  background: #040e6d;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.todoListBox {
  width: 800px;
  height: 600px;
  background: #3c3e4f;
  border-radius: 10px;
  color: white;
}

.header-box {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.header-left {
  display: flex;
  align-items: center;
}

.plusicon {
  width: 50px;
  height: 50px;
  font-size: 30px;
  border-radius: 50%;
  background: #9999e6;
  text-align: center;
  display: flex; /* 新增這行將 .plusicon 設置為 Flex 容器 */
  justify-content: center; /* 新增這行讓內容垂直置中 */
  align-items: center; /* 新增這行讓內容水平置中 */
  margin-right: 15px;
}

.content {
  margin-top: 20px;
  height: 450px;
  overflow-y: auto;
}

.content::-webkit-scrollbar {
  width: 5px; /* 设置滚动条的宽度 */
}

.content::-webkit-scrollbar-track {
  background: #f1f1f196; /* 设置滚动条轨道的背景颜色 */
}

.content::-webkit-scrollbar-thumb {
  background: #888; /* 设置滚动条的颜色 */
}

.content-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #6b6f7d;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  margin-top: 20px;
}

.content-left {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
  position: relative;
}

.content-left span {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #9999e6;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content-right {
  display: flex;
  align-items: center;
}

.content-input {
  flex: 1;
  margin: 0 10px;
  outline: none;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px 10px;
  color: #fff;
}

.Line-through {
  /* 字體顏色 */
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through rgba(255, 255, 255, 0.8);
}
</style>
