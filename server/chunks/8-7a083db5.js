import { p as post, g as get } from './api-cdc1b761.js';
import { Logger } from 'tslog';
import './index-a4865dbd.js';

const logger = new Logger({ name: "userProfile" });
const load = async ({ locals, parent, url }) => {
  logger.debug(`load START`);
  const { role } = await parent();
  let loadData;
  if (role == "admin" && url.searchParams.get("userId")) {
    loadData = await post(
      "auth/profile2",
      {
        userId: url.searchParams.get("userId")
      },
      locals.session.data.jwt
    );
  } else {
    loadData = await get("auth/profile", locals.session.data.jwt);
  }
  const transData = {
    ...loadData,
    accessRole: role
  };
  logger.debug(`load FINISH`);
  return transData;
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-6d35d451.js')).default;
const server_id = "src/routes/(app)/profile/+page.server.ts";
const imports = ["_app/immutable/nodes/8.37d6d881.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/index.5404110d.js","_app/immutable/chunks/each.ee113afc.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/Card.e456f3f6.js","_app/immutable/chunks/Frame.421193f2.js","_app/immutable/chunks/Wrapper.e5fcf98b.js","_app/immutable/chunks/ToolbarButton.569e6375.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-7a083db5.js.map
