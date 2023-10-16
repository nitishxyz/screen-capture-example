import type { ExpoConfig } from "@expo/config";

export default (): ExpoConfig => {
  return {
    name: "screen-capture-example",
    slug: "screen-cature-example",
    version: "1.0.0",
    assetBundlePatterns: ["**/*"],
    android: {
      package: "dev.nitishxyz.screencaptureexample",
    },
    ios: {
      bundleIdentifier: "dev.nitishxyz.screencaptureexample",
    },
    extra: {
      eas: {
        projectId: `${process.env.EAS_PROJECT_ID}`,
      },
    },
    owner: "nitishxyz",
    scheme: "screencaptureexample",
    plugins: [
      "@react-native-firebase/app",
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "static",
          },
        },
      ],
      [
        "expo-image-picker",
        {
          photosPermission:
            "The app accesses your photos to let you share your feedback.",
        },
      ],
    ],
  };
};
