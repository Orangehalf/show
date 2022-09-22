<template>
  <div class="full-width flex items-center header">
    <h1 class="flex-grow-1">CIH-I</h1>
    <div class="full-height">
      <div
        class="menu-item"
        :class="targetPath === item.path ? 'selected' : 'menu-item-hover'"
        v-for="item in cpp"
        :key="item.title"
        @click="handleCommand(item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import path from "../../router/pages";
export default {
  name: "root-header",
  data() {
    return {
      cpp: [],
      targetPath: "",
    };
  },
  methods: {
    init() {
      this.cpp = path;
      let end = location.hash.slice(-3);
      this.targetPath = "/" + end;
    },
    handleCommand(cpp) {
      if(cpp.path === this.targetPath) return
      this.targetPath = cpp.path;
      this.$router.push(cpp.path);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped>
.header {
  margin-top: 2px;
  height: 80px;
}
.title {
  font-size: 20px;
}
.menu-item {
  display: inline-block;
  line-height: 80px;
  vertical-align: middle;
  margin-right: 10px;
  cursor: pointer;
  width: 100px;
  text-align: center;
  position: relative;
}
.selected {
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}

.menu-item-hover::before,
.menu-item-hover::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3cefff;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.menu-item-hover::before {
  top: 0;
  transform-origin: center right;
}

.menu-item-hover:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

.menu-item-hover::after {
  bottom: 0;
  transform-origin: center left;
}

.menu-item-hover:hover::after {
  transform-origin: center right;
  transform: scaleX(1);
}
</style>
