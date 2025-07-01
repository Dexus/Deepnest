import { notarize } from '@electron/notarize';

export default async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;

  if (electronPlatformName !== 'darwin') return;

  const appName = context.packager.appInfo.productFilename;

  return notarize({
    appPath: `${appOutDir}/${appName}.app`,
    appleApiIssuer: process.env.APPLE_API_ISSUER,
    appleApiKey: process.env.APPLE_API_KEY_PATH
  });
};
