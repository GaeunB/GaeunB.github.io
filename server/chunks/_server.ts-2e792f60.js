import { Logger } from 'tslog';
import { r as redirect } from './index-a4865dbd.js';

const logger = new Logger({ name: "logout" });
async function GET({ locals }) {
  logger.debug(`logout START`);
  await locals.session.destroy();
  logger.debug(`logout FINISH`);
  throw redirect(307, "/login");
}

export { GET };
//# sourceMappingURL=_server.ts-2e792f60.js.map
