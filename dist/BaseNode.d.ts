type Theme = Record<string, string>;
export declare abstract class BaseNode<T, R = string> {
    type: string;
    theme: Theme;
    state: T;
    constructor();
    setState(state: T): this;
    setTheme(theme: Theme): this;
    get className(): string;
    abstract render(): R;
}
export {};
