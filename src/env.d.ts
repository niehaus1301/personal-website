/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPLINE_URL: string;
  readonly VITE_SPLINE_CONTENT_LENGTH: number;
  readonly VITE_MAPBOX_ACCESS_TOKEN: string;
  readonly VITE_MAPBOX_STYLE_URL: string;
  readonly VITE_MY_EMAIL: string;
  readonly VITE_SOURCE_CODE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
