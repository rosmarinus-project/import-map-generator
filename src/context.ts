import * as fse from 'fs-extra';
import type { Context, Params } from './types';

export async function loadContext(params: Params): Promise<Context> {
  const cwd = process.cwd();

  if (params.config && fse.existsSync(params.config)) {
    try {
      const config = await require(params.config);
    } catch (e) {
      console.warn('load config error');
    }

    const config = await fse.readJSON(params.config);

    return config;
  }

  return {};
}
