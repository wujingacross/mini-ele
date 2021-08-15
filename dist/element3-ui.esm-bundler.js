/*!
* mini-ele v1.0.0
* (c) 2021 kkb
* @license MIT
*/
import { toRefs, inject, computed, unref, getCurrentInstance, openBlock, createBlock, createCommentVNode, renderSlot } from 'vue';

var script = {
  name: "ElButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  emits: ["click"],
  setup(props, ctx) {
    const { size, disabled } = toRefs(props);
    const buttonSize = useButtonSize(size);
    const buttonDisabled = useButtonDisabled(disabled);
    const handleClick = (evt) => {
      ctx.emit("click", evt);
    };
    return {
      handleClick,
      buttonSize,
      buttonDisabled,
    };
  },
};
const useButtonSize = (size) => {
  const elFormItem = inject("elFormItem", {});
  const _elFormItemSize = computed(() => {
    return unref(elFormItem.elFormItemSize);
  });
  const buttonSize = computed(() => {
    return (
      size.value ||
      _elFormItemSize.value ||
      (getCurrentInstance().proxy.$ELEMENT || {}).size
    );
  });
  return buttonSize;
};
const useButtonDisabled = (disabled) => {
  const elForm = inject("elForm", {});
  const buttonDisabled = computed(() => {
    return disabled.value || unref(elForm.disabled);
  });
  return buttonDisabled;
};

const _hoisted_1 = {
  key: 0,
  class: "el-icon-loading"
};
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", {
    class: ["el-button", [
      $props.type ? 'el-button--' + $props.type : '',
      $setup.buttonSize ? 'el-button--' + $setup.buttonSize : '',
      {
        'is-disabled': $setup.buttonDisabled,
        'is-loading': $props.loading,
        'is-plain': $props.plain,
        'is-round': $props.round,
        'is-circle': $props.circle,
      },
    ]],
    onClick: _cache[1] || (_cache[1] = (...args) => ($setup.handleClick(...args))),
    disabled: $setup.buttonDisabled || $props.loading,
    autofocus: $props.autofocus,
    type: $props.nativeType
  }, [
    ($props.loading)
      ? (openBlock(), createBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    ($props.icon && !$props.loading)
      ? (openBlock(), createBlock("i", {
          key: 1,
          class: $props.icon
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 10 /* CLASS, PROPS */, ["disabled", "autofocus", "type"]))
}

script.render = render;
script.__file = "packages/button/Button.vue";

/* istanbul ignore next */

script.install = function (app) {
  app.component(script.name, script);
};

var version = "1.0.0";

// ⽤于构建时的⼊⼝
const components = [script];

const install = (app, opts = {}) => {
  app.use(setupGlobalOptions(opts));
  components.forEach(component => {
    app.use(component);
  });
};

const setupGlobalOptions = (opts = {}) => {
  return app => {
    app.config.globalProperties.$ELEMENT = {
      size: opts.size || "",
      zIndex: opts.zIndex || 2000
    };
  };
};

const elementUI = {
  version,
  install
};

export { script as ElButton, elementUI as default, install };
