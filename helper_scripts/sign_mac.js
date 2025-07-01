import { notarize } from '@electron/notarize';
import path from 'path';

export default async function notarizing(context) {
  console.log(context);
  const { platform, app } = context;

  if (platform !== 'darwin') {
    console.log('Skipping notarization - not building for macOS:', electronPlatformName);
    //return;
  }

  console.log(`Notarizing ${app}...`);

  try {
    await notarize({
      tool: 'notarytool',
      appPath: app,
      keychain: process.env.KEYCHAIN_PATH || 'login.keychain-db',
      keychainProfile: 'deepnest-next',
    });
    console.log('Notarization successful');
  } catch (error) {
    console.error('Notarization failed:', error);
    throw error;
  }
}
