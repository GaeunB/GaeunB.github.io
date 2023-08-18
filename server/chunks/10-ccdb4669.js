import { f as fail } from './index-a4865dbd.js';
import { Logger } from 'tslog';
import { p as post } from './api-cdc1b761.js';
import 'fs';
import 'path';

const logger = new Logger({ name: "search" });
const actions = {
  search: async ({ request, locals }) => {
    console.log("actions post called");
    const formData = await request.formData();
    formData.get("file");
    console.log("get formdata");
    const imageUrls = await post("image/covers", formData, locals.session).catch(
      (error) => {
        logger.error("search catch error:", error);
        return fail(error.statusCode, { error: error.toString() });
      }
    );
    console.log("imageUrls:", imageUrls);
    if (imageUrls.error) {
      logger.error(`search error:`, imageUrls.message);
      return fail(400, { error: imageUrls.message });
    }
    return { urls: imageUrls };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-66334fc8.js')).default;
const server_id = "src/routes/(app)/search/+page.server.ts";
const imports = ["_app/immutable/nodes/10.039e8c4e.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/each.ee113afc.js","_app/immutable/chunks/index.5404110d.js","_app/immutable/chunks/paths.ca081d21.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-ccdb4669.js.map
