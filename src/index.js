import m from "mithril";
import katex from "katex";

const renderMath = mathString => ({
  oncreate: ({ dom }) => {
    dom.innerHTML = katex.renderToString(mathString, {
      throwOnError: false
  });
  },
  view: () => m("div")
});

const $root = document.querySelector('#app');
m.mount($root, renderMath(`c = \\pm\\sqrt{a^2 + b^2}`));