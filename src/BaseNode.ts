export abstract class BaseNode<T, R = string> {
  type: string;
  state: T = undefined as T;

  constructor() {
    this.type = "";
  }

  setState(state: T) {
    this.state = state;
    return this.state;
  }

  public abstract render(): R;
}
