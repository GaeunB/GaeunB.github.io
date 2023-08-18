import { f as fail, r as redirect } from './index-a4865dbd.js';
import { Logger } from 'tslog';
import { p as post } from './api-cdc1b761.js';

const logger = new Logger({ name: "register" });
const load = async ({ parent, url, locals }) => {
  logger.debug(`load START`);
  logger.debug(`load END`);
};
const actions = {
  register: async ({ locals, request, cookies }) => {
    const data = await request.formData();
    const confirmPassword = data.get("confirm_password");
    const password = data.get("password");
    if (confirmPassword != password) {
      return fail(400, { password, incorrecting: true });
    }
    logger.debug(`actions register START`);
    logger.debug(`actions register password:${password}`);
    console.log(
      await post(
        "auth/register",
        {
          name: data.get("name"),
          phone: data.get("phone"),
          password: data.get("password"),
          // id: data.get('id'),
          // email: data.get('email'),
          role: "user"
        },
        ""
      )
    );
    logger.debug(`actions register redirect to /login`);
    throw redirect(302, "/login");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 15;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-85bccdc1.js')).default;
const server_id = "src/routes/(auth)/register/+page.server.ts";
const imports = ["_app/immutable/nodes/15.a1e97184.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/index.5404110d.js","_app/immutable/chunks/A.aa9366ce.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/Input.39fe974f.js","_app/immutable/chunks/Wrapper.e5fcf98b.js","_app/immutable/chunks/Card.e456f3f6.js","_app/immutable/chunks/Frame.421193f2.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=15-848ebf79.js.map
