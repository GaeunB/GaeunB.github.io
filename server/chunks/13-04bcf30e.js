import { g as get } from './api-cdc1b761.js';
import { Logger } from 'tslog';
import './index-a4865dbd.js';

const logger = new Logger({ name: "userList" });
const load = async ({ params, locals }) => {
  const page = Number(params.page);
  logger.debug(`load START`);
  const loadData = await get(`auth/users?page=${page}`, locals.session.data.jwt);
  return loadData;
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d230012a.js')).default;
const server_id = "src/routes/(app)/userlist/[page]/+page.server.ts";
const imports = ["_app/immutable/nodes/13.d7bc5841.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/index.5404110d.js","_app/immutable/chunks/each.ee113afc.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/stores.0f1d918b.js","_app/immutable/chunks/singletons.661cbaf3.js","_app/immutable/chunks/paths.ca081d21.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-04bcf30e.js.map
