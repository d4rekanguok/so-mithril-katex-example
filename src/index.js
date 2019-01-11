import m from "mithril";
import katex from "katex";

const renderMath = mathHTML => ({
  oncreate: ({ dom }) => {
    dom.innerHTML = mathHTML;
  },
  view: vnode => m("div", "loading math expression")
});

const $root = document.querySelector('#app');
const mathHTML = katex.renderToString(`c = \\pm\\sqrt{a^2 + b^2}`);
m.mount($root, renderMath(mathHTML));