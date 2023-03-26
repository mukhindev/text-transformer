type Theme = Record<string, string>;

export abstract class BaseNode<T, R = string> {
  type: string;
  theme: Theme = {};
  state: T = undefined as T;

  constructor() {
    this.type = "";
  }

  setState(state: T) {
    this.state = state;
    return this;
  }

  setTheme(theme: Theme) {
    this.theme = theme;
    return this;
  }

  get className(): string {
    return this.theme[this.type] ?? this.type;
  }

  public abstract render(): R;
}
