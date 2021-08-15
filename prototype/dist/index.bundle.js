import { openBlock, createBlock } from 'vue';

var MyButton = {
  name: "MyButton",
  data: function () {
    return {
      count: 0
    };
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button > '
};

var script = {
  name: "SfcButton",
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", null, "Sfc 666"))
}

script.render = render;
script.__file = "src/SfcButton.vue";

MyButton.install = app => app.component("MyButton", MyButton);

script.install = app => app.component("SfcButton", script); // 组件库


const Element = {
  MyButton,
  SfcButton: script,
  install: app => {
    app.use(MyButton).use(script);
  }
};

export default Element;
