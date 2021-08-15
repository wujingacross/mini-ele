/*!
* mini-ele v1.0.0
* (c) 2021 kkb
* @license MIT
*/
var Element3 = (function (exports, vue) {
  'use strict';

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
      const { size, disabled } = vue.toRefs(props);
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
    const elFormItem = vue.inject("elFormItem", {});
    const _elFormItemSize = vue.computed(() => {
      return vue.unref(elFormItem.elFormItemSize);
    });
    const buttonSize = vue.computed(() => {
      return (
        size.value ||
        _elFormItemSize.value ||
        (vue.getCurrentInstance().proxy.$ELEMENT || {}).size
      );
    });
    return buttonSize;
  };
  const useButtonDisabled = (disabled) => {
    const elForm = vue.inject("elForm", {});
    const buttonDisabled = vue.computed(() => {
      return disabled.value || vue.unref(elForm.disabled);
    });
    return buttonDisabled;
  };

  const _hoisted_1 = {
    key: 0,
    class: "el-icon-loading"
  };
  const _hoisted_2 = { key: 2 };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createBlock("button", {
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
        ? (vue.openBlock(), vue.createBlock("i", _hoisted_1))
        : vue.createCommentVNode("v-if", true),
      ($props.icon && !$props.loading)
        ? (vue.openBlock(), vue.createBlock("i", {
            key: 1,
            class: $props.icon
          }, null, 2 /* CLASS */))
        : vue.createCommentVNode("v-if", true),
      (_ctx.$slots.default)
        ? (vue.openBlock(), vue.createBlock("span", _hoisted_2, [
            vue.renderSlot(_ctx.$slots, "default")
          ]))
        : vue.createCommentVNode("v-if", true)
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

  exports.ElButton = script;
  exports['default'] = elementUI;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}, Vue));
