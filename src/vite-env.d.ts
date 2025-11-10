/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_GA_TRACKING_TOKEN: string
  readonly VITE_HOTJAR_ID: string
  readonly VITE_HOTJAR_VERSION: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  interface Window {
    API_URL?: string;
    GA_TRACKING_TOKEN?: string;
    HOTJAR_ID?: string;
    HOTJAR_VERSION?: string;
  }
}
