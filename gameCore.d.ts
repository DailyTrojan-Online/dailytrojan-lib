export declare function processSeed(seed?: string | number): number;

export declare function mixKey(seed: string | number, key: number[]): number[];

export declare function hideBackButton(): void;

export declare function hideHeader(): void;

export declare function enableDarkMode(): void;

export declare function disableDarkMode(): void;

declare const _arc4_startdenom: number;
declare const _arc4_significance: number;
declare const _arc4_overflow: number;

export declare class ARC4RNG {
    private _seed: number;
    private i: number;
    private j: number;
    private S: number[];
    constructor(seed: string | number);
    get name(): string;
    next(): number;
    g(count: number): number;
    clone(): ARC4RNG;
}

export declare class DTGameCore {
    rng: ARC4RNG | null;
    gameSplash: HTMLElement | null;
    splashDate: HTMLElement | null;
    gameSeed: string;
    constructor(gameSplash?: HTMLElement | null, splashDate?: HTMLElement | null);
    initRNG(seed: string | number): void;
    homeRedirect(): void;
    back(): void;
    redirect(url: string): void;
    hideSplashScreen(): void;
    randomArrayElement<T>(arr: T[]): T;
    randomInt(min?: number, max?: number): number;
    randomFloat(min?: number, max?: number): number;
    copyToClipboard(text: string): void;
    formatString(str: string, ...args: any[]): string;
    showToast(message: string, icon: string, duration?: number): void;
}
