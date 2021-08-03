<template>
  <div id="editor">
    <div ref="toolbar" class="toolbar"></div>
    <div ref="editor" class="text"></div>
  </div>
</template>

<script>
import E from "wangeditor";
import { apiUploadFile } from "@/api/hospital/list";
import { to } from "await-to-js";
export default {
  name: "Editorbar",
  props: {
    htmlData: {
      type: String,
      default: ""
    },
    catchData: {
      type: Function
    }
  },
  data() {
    return {
      editor: null,
      editorContent: ""
    };
  },
  watch: {
    htmlData: {
      handler(val) {
        if (this.editor) {
          this.editor.txt.html(val);
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.initEditor();
  },
  methods: {
    initEditor() {
      this.editor = new E(this.$refs.toolbar, this.$refs.editor);
      this.editor.customConfig.menus = [
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "underline", // 下划线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        "image", // 插入图片
        "list", // 列表
        "justify", // 对齐方式
        "table", // 表格
        "undo", // 撤销
        "redo" // 重复
      ];
      this.editor.customConfig.onchange = html => {
        this.editorContent = html;
        this.catchData(this.editorContent);
      };
      this.editor.customConfig.uploadFileName = "file";
      this.editor.customConfig.pasteFilterStyle = true;
      this.editor.customConfig.uploadImgShowBase64 = false;
      this.editor.customConfig.uploadImgMaxSize = 20 * 1024 * 1024;
      this.editor.customConfig.customUploadImg = (files, insertImgFn) => {
        files.map(async(file, index) => {
          const formData = new FormData();
          formData.append("file", file);
          const [err, data] = await to(apiUploadFile("file", formData));
          if (!err && data) {
            const fileUrl = data.data.url;
            insertImgFn(fileUrl);
          }
        });
      };

      this.editor.create();
      this.editor.txt.html(this.htmlData);
    }
  }
};
</script>

<style scoped lang="scss">
#editor{
  .toolbar {
    height: 40px;
    align-items: center;
    border-right: 1px solid #DCDFE6;
    border-top: 1px solid #DCDFE6;
    border-left: 1px solid #DCDFE6;
  }
  .text {
    border: 1px solid #DCDFE6;
    overflow-y: auto;
  }
}
</style>
