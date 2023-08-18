const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["admin.png","bg.jpg","cloth1.jpg","cloth2.jpg","example.gif","favicon.png","logo1.png","robots.txt","user.png","xsearchlogo.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.86626fa4.js","app":"_app/immutable/entry/app.53328cb9.js","imports":["_app/immutable/entry/start.86626fa4.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/singletons.661cbaf3.js","_app/immutable/chunks/paths.ca081d21.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.53328cb9.js","_app/immutable/chunks/scheduler.4bdca5e6.js","_app/immutable/chunks/index.5404110d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-4a40f5a2.js')),
			__memo(() => import('./chunks/1-3e53ed4a.js')),
			__memo(() => import('./chunks/2-072a0814.js')),
			__memo(() => import('./chunks/4-5e493e1c.js')),
			__memo(() => import('./chunks/5-2a279001.js')),
			__memo(() => import('./chunks/6-ba66a93c.js')),
			__memo(() => import('./chunks/7-02c68d55.js')),
			__memo(() => import('./chunks/8-7a083db5.js')),
			__memo(() => import('./chunks/9-41e46e8f.js')),
			__memo(() => import('./chunks/10-ccdb4669.js')),
			__memo(() => import('./chunks/11-dd22eec7.js')),
			__memo(() => import('./chunks/12-c25802fc.js')),
			__memo(() => import('./chunks/13-04bcf30e.js')),
			__memo(() => import('./chunks/14-bf4b46e8.js')),
			__memo(() => import('./chunks/15-848ebf79.js'))
		],
		routes: [
			{
				id: "/(app)/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(auth)/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-2e792f60.js'))
			},
			{
				id: "/(app)/main",
				pattern: /^\/main\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/pay",
				pattern: /^\/pay\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/profile/edit",
				pattern: /^\/profile\/edit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/statistics",
				pattern: /^\/statistics\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/userlist",
				pattern: /^\/userlist\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/userlist/[page]",
				pattern: /^\/userlist\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
