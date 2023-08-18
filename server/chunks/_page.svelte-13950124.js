import { c as create_ssr_component, v as validate_component } from './ssr-326d5af4.js';
import { R as Radio, C as Checkbox, A, B as Button } from './A-86884504.js';
import { L as Label, I as Input } from './Input-c2c9efc2.js';
import './names-11b10067.js';
import 'tailwind-merge';
import './Wrapper-9ba24588.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let colors = "purple";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="max-w-lg mx-auto mt-8 mb-8"><form action="?/register" method="POST"><div class="grid gap-6 mb-6 md:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "id", class: "mb-2 text-indigo-400" }, {}, {
      default: () => {
        return `ID`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "id",
        name: "id",
        placeholder: "kangin",
        required: true
      },
      {},
      {}
    )}</div> <div>${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "name",
        class: "mb-2 text-indigo-400"
      },
      {},
      {
        default: () => {
          return `Name`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "name",
        name: "name",
        placeholder: "이강인",
        required: true
      },
      {},
      {}
    )}</div> <div>${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "phone",
        class: "mb-2 text-indigo-400"
      },
      {},
      {
        default: () => {
          return `📞 Phone number`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "tel",
        id: "phone",
        name: "phone",
        placeholder: "010-5917-7550",
        required: true
      },
      {},
      {}
    )}</div> <div class="grid grid-cols-2 gap-6"> ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        name: "role",
        class: "w-full p-4 bg-white",
        color: "purple",
        value: "admin",
        group: colors
      },
      {
        group: ($$value) => {
          colors = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `admin`;
        }
      }
    )} ${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        name: "role",
        class: "w-full p-4 bg-white",
        color: "purple",
        value: "user",
        group: colors
      },
      {
        group: ($$value) => {
          colors = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `user`;
        }
      }
    )}</div></div> <div class="mb-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "email",
        class: "mb-2 text-indigo-400"
      },
      {},
      {
        default: () => {
          return `✉️ Email address`;
        }
      }
    )} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "kangin@gmail.com",
        required: true
      },
      {},
      {}
    )}</div>   <div class="mb-6">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "password",
        class: "mb-2 text-indigo-400"
      },
      {},
      {
        default: () => {
          return `🔒 Password`;
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
        class: "mb-2 text-indigo-400"
      },
      {},
      {
        default: () => {
          return `✔️ Confirm password`;
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
        color: "purple",
        class: "mb-6 space-x-1 text-indigo-400",
        required: true
      },
      {},
      {
        default: () => {
          return `I agree with the ${validate_component(A, "A").$$render(
            $$result,
            {
              href: "/",
              class: "text-indigo-300 hover:underline"
            },
            {},
            {
              default: () => {
                return `terms and conditions`;
              }
            }
          )}.`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        type: "submit",
        class: "bg-indigo-500 font-semibold hover:text-indigo-500 hover:bg-indigo-400"
      },
      {},
      {
        default: () => {
          return `Submit`;
        }
      }
    )}</form></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-13950124.js.map
