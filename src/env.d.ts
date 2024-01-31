/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPLINE_URL: string;
  readonly VITE_MAPBOX_ACCESS_TOKEN: string;
  readonly VITE_MAPBOX_STYLE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
