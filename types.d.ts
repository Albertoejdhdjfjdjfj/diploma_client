declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '*.png' {
  import * as React from 'react';

  interface PNGProps {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  export const ReactComponent: React.FunctionComponent<PNGProps & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.jpg' {
  import * as React from 'react';

  interface JPGProps {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  export const ReactComponent: React.FunctionComponent<JPGProps & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
