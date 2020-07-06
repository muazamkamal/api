export interface Component {
  name: string;
  description?: string;
  quantity: number;
  hyperlink: string;
}

export interface Gear {
  hardware: string;
  components: Array<Component>;
  banner: string;
}
