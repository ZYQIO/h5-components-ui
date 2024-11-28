export declare const themePresets: {
    readonly default: {
        readonly bgImage: "/images/default-bg.png";
        readonly primaryColor: "#409eff";
    };
    readonly dark: {
        readonly bgImage: "/images/dark-bg.png";
        readonly primaryColor: "#333333";
    };
};
export type ThemePreset = keyof typeof themePresets;
