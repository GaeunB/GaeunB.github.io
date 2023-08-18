import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-326d5af4.js';
import { C as Card } from './Card-3afb8a58.js';
import { L as Label, I as Input } from './Input-c2c9efc2.js';
import 'tailwind-merge';
import './Frame-11ed61ac.js';
import './names-11b10067.js';
import './Wrapper-9ba24588.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-sm" data-svelte-h="svelte-1fsnw72"><img class="mx-auto h-0 w-auto" src="/logo1.png" alt="Your Company"> <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-pink-500">로그인하기</h2></div> ${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "px-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
    },
    {},
    {
      default: () => {
        return `<form class="space-y-5" action="?/login" method="POST"><div>${validate_component(Label, "Label").$$render($$result, { for: "id", class: "mb-2.5 text-pink-400" }, {}, {
          default: () => {
            return `전화번호`;
          }
        })} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "id",
            name: "id",
            type: "text",
            placeholder: "전화번호를 입력하세요.",
            size: "md"
          },
          {},
          {}
        )}</div> <div>${validate_component(Label, "Label").$$render(
          $$result,
          {
            for: "password",
            class: "mb-2.5 text-pink-400"
          },
          {},
          {
            default: () => {
              return `비밀번호`;
            }
          }
        )} ${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "비밀번호를 입력하세요.",
            size: "lg"
          },
          {},
          {
            left: () => {
              return `<button slot="left" class="pointer-events-auto">${`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>`}</button>`;
            }
          }
        )}</div> <div class="mt-7" data-svelte-h="svelte-1pjg91n"><button type="submit" class="flex w-full justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-pink-500 hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500">로그인</button></div> ${form?.incorrect ? `<p class="error text-red-500">${escape(form.message)}</p>` : ``}</form>  <p class="mt-5 text-center text-sm text-gray-500" data-svelte-h="svelte-102conc"><a href="/register" class="flex w-full justify-center rounded-md bg-pink-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:text-pink-500 hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500">회원가입하기</a></p>`;
      }
    }
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2a71acb4.js.map
