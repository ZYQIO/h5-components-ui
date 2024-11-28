import { App } from 'vue';
import MyButton from './components/MyButton/MyButton.vue';
import AppLayout from './components/AppLayout/AppLayout.vue';
import { Theme } from './theme';
import { themePresets } from './theme/presets';
export { MyButton, AppLayout };
export { Theme, themePresets };
export type { ThemeOptions } from './theme';
export type { ThemePreset } from './theme/presets';
declare const _default: {
    install: (app: App) => void;
};
export default _default;
export declare const setupTheme: (options?: {
    bgImage?: string;
}) => void;
