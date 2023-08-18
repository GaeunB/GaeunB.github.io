import { c as create_ssr_component, b as subscribe, l as each, e as escape } from './ssr-326d5af4.js';
import { p as page } from './stores-cfcb08b4.js';

const css = {
  code: ".grid.svelte-u0rlaz.svelte-u0rlaz{display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin:20px}.button.svelte-u0rlaz.svelte-u0rlaz{display:flex;justify-content:center;align-items:center;width:full;height:100px;padding:10px;border:none;border-radius:8px;font-size:16px;color:white;cursor:pointer}.button.svelte-u0rlaz a.svelte-u0rlaz{font-size:30px;margin:0}.pink.svelte-u0rlaz.svelte-u0rlaz{background-color:pink}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const buttons = [
    { text: "검색", color: "pink" },
    { text: "상의", color: "pink" },
    { text: "하의", color: "pink" },
    { text: "세트", color: "pink" },
    { text: "잡화", color: "pink" },
    { text: "속옷", color: "pink" }
  ];
  let activeUrl;
  $$result.css.add(css);
  {
    {
      activeUrl = $page.url.pathname;
      console.log(`activeUrl:${activeUrl}`);
    }
  }
  $$unsubscribe_page();
  return `<article data-svelte-h="svelte-zrx43g"><div class="m-20 w-full max-w-4xl"><h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-pink-400 ">쇼핑하기</span> <p class="mb-10 text-xl text-gray-700 ">구매하고자 하는 종류를 선택하세요!</p></h1></div></article> <div class="grid svelte-u0rlaz">${each(buttons, (button) => {
    return `<button class="${"button " + escape(button.color, true) + " svelte-u0rlaz"}"><a href="/search" class="svelte-u0rlaz">${escape(button.text)}</a> </button>`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c19964a8.js.map
