export const appContext = require.context(
  process.env.ROUTER_ROOT!,
  true,
  /.*/,
  process.env.IMPORT_MODE as any
);
