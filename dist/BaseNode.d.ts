export declare abstract class BaseNode<T, R = string> {
    type: string;
    state: T;
    constructor();
    setState(state: T): T;
    abstract render(): R;
}
