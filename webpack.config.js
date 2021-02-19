// Error: module parse failed when adding native-base
// Solution: add native-base to babel config. To do that:
// run: expo install @expo/webpack-config
// Then add this file to root level
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@codler/react-native-keyboard-aware-scroll-view']
        }
    }, argv);
    return config;
};
