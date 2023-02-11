/// <reference types="react-scripts" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export = content;
}

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
}

declare module '*.png' {
  const content: StaticImageData;
  export = content;
}

declare module '*.jpg' {
  const content: StaticImageData;
  export = content;
}

declare module '*.jpeg' {
  const content: StaticImageData;
  export = content;
}

declare module '*.gif' {
  const content: StaticImageData;
  export = content;
}

declare module '*.webp' {
  const content: StaticImageData;
  export = content;
}

declare module '*.ico' {
  const content: StaticImageData;
  export = content;
}

declare module '*.bmp' {
  const content: StaticImageData;
  export = content;
}
