import { f as fail, r as redirect } from './index-a4865dbd.js';
import { Logger } from 'tslog';
import { p as post } from './api-cdc1b761.js';

const logger = new Logger({ name: "login" });
const load = async ({}) => {
  logger.debug(`load START`);
  logger.debug(`load END`);
};
const actions = {
  login: async ({ request, locals, cookies }) => {
    const data = await request.formData();
    logger.debug(`actions login START`);
    const body = await post(
      "auth/login",
      {
        id: data.get("id"),
        password: data.get("password")
      },
      ""
    );
    logger.debug(body);
    if (body.status == 403) {
      const message = body.response.message;
      logger.debug(message);
      return fail(body.status, { message, incorrect: true });
    }
    await locals.session.set({
      jwt: body.accessToken
    });
    throw redirect(302, "/home");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-2a71acb4.js')).default;
const server_id = "src/routes/(auth)/login/+page.server.ts";
const imports = ["_app/immutable/nodes/14.77d59580.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/index.5404110d.js","_app/immutable/chunks/Card.e456f3f6.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/Frame.421193f2.js","_app/immutable/chunks/Input.39fe974f.js","_app/immutable/chunks/Wrapper.e5fcf98b.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.661cbaf3.js","_app/immutable/chunks/paths.ca081d21.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-bf4b46e8.js.map
