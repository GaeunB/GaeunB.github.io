const load = async ({ parent }) => {
  console.log(await parent());
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-13950124.js')).default;
const server_id = "src/routes/(app)/profile/edit/+page.server.ts";
const imports = ["_app/immutable/nodes/9.f19b359b.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/index.5404110d.js","_app/immutable/chunks/A.aa9366ce.js","_app/immutable/chunks/tw-merge.dd2125e8.js","_app/immutable/chunks/Input.39fe974f.js","_app/immutable/chunks/Wrapper.e5fcf98b.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-41e46e8f.js.map
