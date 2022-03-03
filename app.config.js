import 'dotenv/config';

export default {
    expo: {
        name: 'Skeetry',
        slug: 'skeetry',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        splash: {
            image: './assets/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff',
        },
        updates: {
            fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: false,
            bundleIdentifier: 'com.kive.skeetry',
            buildNumber: 2,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#FFFFFF',
            },
            package: 'com.kive.skeetry',
            versionCode: 2,
        },
        web: {
            favicon: './assets/favicon.png',
        },
        plugins: ['sentry-expo'],
        extra: {
            EXPO_CLIENT_ID: process.env.EXPO_CLIENT_ID,
            IOS_CLIENT_ID: process.env.IOS_CLIENT_ID,
            ANDROID_CLIENT_ID: process.env.ANDROID_CLIENT_ID,
            WEB_CLIENT_ID: process.env.WEB_CLIENT_ID,
            SENTRY_DSN: process.env.SENTRY_DSN,
        },
    },
};
