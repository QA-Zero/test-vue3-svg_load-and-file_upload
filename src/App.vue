<template>
  <div class="main-content">
    <div class="left-menu">
      <el-menu
        default-active="1"
        background-color="transparent"
      >
        <el-menu-item index="1">
          <kit-icon
            name="first"
            type="regular"
            hover="regular"
            class="first-icon"
          />
          <span class="title">First rout</span>
        </el-menu-item>

        <el-menu-item index="2">
          <kit-icon
            name="second"
            type="error"
            hover="error"
            class="second-icon"
          />
          <span class="title">Second rout</span>
        </el-menu-item>
      </el-menu>
    </div>

    <div class="upload-list">
      <div class="row row-first">
        <kit-icon name="first" :type="fileList.firstFile ? 'regular' : 'error'"  />
        <el-upload
          class="upload upload-first"
          action="https://jsonplaceholder.ir/posts/"
          list-type="picture"
          ref="firstFile"
          :on-success="(...args) => addFile('firstFile', ...args)"
          :on-remove="() => deleteFile('firstFile')"
        >
          <el-button type="primary">Load first file</el-button>
        </el-upload>
        <div class="icon-stub"></div>
      </div>
      <div class="row row-second">
        <kit-icon name="first" :type="fileList.secondFile ? 'regular' : 'error'" />
        <el-upload
          class="upload upload-second"
          action="https://jsonplaceholder.ir/posts/"
          list-type="picture"
          ref="secondFile"
          :on-success="(...args) => addFile('secondFile', ...args)"
          :on-remove="() => deleteFile('secondFile')"
        >
          <el-button type="primary">Load second file</el-button>
        </el-upload>
        <div class="icon-stub"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      fileList: {
        firstFile: '',
        secondFile: '',
      },
    }
  },
  methods: {
    addFile(key, response, file, fileList) {
      if (fileList.length > 1) {
        this.$refs[key].clearFiles();
        this.$refs[key].uploadFiles.push(file);

        Object.keys(this.fileList).forEach(key => {
          this.fileList[key] = '';
        });
      }

      this.fileList[key] = file;
    },

    deleteFile(key) {
      this.fileList[key] = '';
    },
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.el-button {
  width: 180px;
}

.el-upload-list--picture {
  height: 90px;
  width: 100px;
  position: absolute;
  right: -110px;
  top: -25px;

  .el-upload-list__item {
    height: 90px;
    width: 100px;
    margin: 0;
    padding: 9px 9px 9px 89px;

    .el-upload-list__item-name {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>

.main-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .left-menu {
    width: 100%;
    background-color: #eee;
    display: flex;
    justify-content: center;

    .el-menu {
      width: 300px;
      background-color: #ddd !important;

      .el-menu-item {
        display: flex;
        align-items: center;

        .title {
          margin-left: 10px;
          font-size: 20px;
        }

        &.is-active {
          .icon {
            &-regular:deep(path, rect) {
              fill: #409eff;
            }

            &-error :deep(path, rect) {
              fill: #409eff;
            }
          }
        }
      }
    }
  }

  .upload-list {
    width: 100%;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .row {
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;

      &.row-first {
        margin-bottom: 35px;
      }

      .icon {
        margin-left: -5px;
      }

      .upload {
        width: fit-content;
        margin-left: 10px;
        position: relative;
      }

      .icon-stub {
        height: 100%;
        width: 100px;
        margin-left: 10px;
        border-radius: 8px;
        background-color: #faa;
      }
    }
  }
}
</style>
