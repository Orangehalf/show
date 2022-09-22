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
        <el-dropdown class="fit" v-if="item.children" @command="handleCommand">
          <span
            class="el-dropdown-link fit menu-item-title"
            style="display: inline-block"
          >
            {{ item.title }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              :class="showTarget === child.path ? 'child-selected ' : ''"
              v-for="child in item.children"
              :key="child.path"
              :command="{ child: true, data: child, parent: item.path }"
              >{{ child.title }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <span v-else class="menu-item-title">
          {{ item.title }}
        </span>
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
      showTarget: "",
    };
  },
  methods: {
    init() {
      this.cpp = path.filter((v) => !v.child);
      let end = location.hash.split("#")[1];
      if (end.indexOf("-") > 0) {
        this.showTarget = end;
        end = end.split("-")[0];
      }
      this.targetPath = end;
    },
    handleCommand(cpp) {
      if (cpp.path === this.targetPath) return;
      if (cpp.children) return;

      if (cpp.child) {
        if (this.showTarget === cpp.data.path) return;
        this.targetPath = cpp.parent;
        this.showTarget = cpp.data.path;
        this.$router.push(cpp.data.path);
      } else {
        this.targetPath = cpp.path;
        this.showTarget = "";
        this.$router.push(cpp.path);
      }
      return;
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
  user-select: none;
}
.menu-item-title {
  font-size: 14px;
  color: #606266;
  user-select: none;
}
.menu-item-title:hover {
  color: #67c23a;
}
.selected {
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}
.selected .menu-item-title {
  color: #409eff;
}
.child-selected {
  color: #66b1ff;
  background-color: #ecf5ff;
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
