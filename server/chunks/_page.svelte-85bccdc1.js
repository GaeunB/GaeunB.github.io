import { c as create_ssr_component, v as validate_component } from './ssr-326d5af4.js';
import { C as Checkbox, A, B as Button } from './A-86884504.js';
import { C as Card } from './Card-3afb8a58.js';
import { L as Label, I as Input } from './Input-c2c9efc2.js';
import './names-11b10067.js';
import 'tailwind-merge';
import './Frame-11ed61ac.js';
import './Wrapper-9ba24588.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `${validate_component(Card, "Card").$$render($$result, { class: "max-w-lg mx-auto mt-8 mb-8" }, {}, {
    default: () => {
      return `<div><form action="?/register" method="POST"><div class="grid gap-6 mb-6 md:grid-cols-2"> <div>${validate_component(Label, "Label").$$render($$result, { for: "name", class: "mb-2 text-pink-400" }, {}, {
        default: () => {
          return `이름`;
        }
      })} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "text",
          id: "name",
          name: "pink",
          placeholder: "이강인",
          required: true
        },
        {},
        {}
      )}</div> <div>${validate_component(Label, "Label").$$render(
        $$result,
        {
          for: "phone",
          class: "mb-2 text-pink-400"
        },
        {},
        {
          default: () => {
            return `📞전화번호`;
          }
        }
      )} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "tel",
          id: "phone",
          name: "phone",
          placeholder: "010-0000-1111",
          required: true
        },
        {},
        {}
      )}</div> </div>  ${form?.incorrecting ? `<p class="error text-red-500" data-svelte-h="svelte-4igao1">비밀번호가 다릅니다.</p>` : ``}  <div class="mb-6">${validate_component(Label, "Label").$$render(
        $$result,
        {
          for: "password",
          class: "mb-2 text-pink-400"
        },
        {},
        {
          default: () => {
            return `🔒 비밀번호`;
          }
        }
      )} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "password",
          id: "password",
          name: "password",
          placeholder: "•••••••••",
          required: true
        },
        {},
        {}
      )}</div> <div class="mb-6">${validate_component(Label, "Label").$$render(
        $$result,
        {
          for: "confirm_password",
          class: "mb-2 text-pink-400"
        },
        {},
        {
          default: () => {
            return `✔️ 비밀번호 확인`;
          }
        }
      )} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "password",
          id: "confirm_password",
          name: "confirm_password",
          placeholder: "•••••••••",
          required: true
        },
        {},
        {}
      )}</div> ${validate_component(Checkbox, "Checkbox").$$render(
        $$result,
        {
          checked: true,
          color: "red",
          class: "mb-6 space-x-1 text-pink-400",
          required: true
        },
        {},
        {
          default: () => {
            return `약관에 동의합니다. ${validate_component(A, "A").$$render(
              $$result,
              {
                href: "/",
                class: "text-pink-400 hover:underline"
              },
              {},
              {
                default: () => {
                  return `이용약관`;
                }
              }
            )}.`;
          }
        }
      )} ${validate_component(Button, "Button").$$render(
        $$result,
        {
          type: "submit",
          class: "bg-pink-500 font-semibold hover:text-pink-500 hover:bg-pink-400"
        },
        {},
        {
          default: () => {
            return `가입하기`;
          }
        }
      )}</form></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-85bccdc1.js.map
