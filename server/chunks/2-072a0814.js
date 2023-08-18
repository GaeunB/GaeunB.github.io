import { Logger } from 'tslog';
import { r as redirect } from './index-a4865dbd.js';
import jwt_decode from 'jwt-decode';

const logger = new Logger({ name: "layout" });
const load = async ({ locals }) => {
  const valid = locals.session.data.jwt;
  if (valid) {
    logger.debug(`login 완료`);
    const decoded = jwt_decode(valid);
    locals.userId = decoded.id;
    console.log(decoded);
    return decoded;
  } else {
    logger.debug(`login 필요`);
    throw redirect(307, "/login");
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-771919e1.js')).default;
const server_id = "src/routes/(app)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.c0551efb.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/index.5404110d.js","_app/immutable/chunks/stores.0f1d918b.js","_app/immutable/chunks/singletons.661cbaf3.js","_app/immutable/chunks/paths.ca081d21.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/Frame.421193f2.js","_app/immutable/chunks/ToolbarButton.569e6375.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-072a0814.js.map
