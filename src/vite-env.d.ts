/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_GA_TRACKING_TOKEN: string
  readonly VITE_HOTJAR_ID: string
  readonly VITE_HOTJAR_VERSION: string
  readonly VITE_ELASTIC_APM_SERVICE_NAME: string
  readonly VITE_ELASTIC_APM_SERVER_URL: string
  readonly VITE_ELASTIC_APM_SERVICE_VERSION: string
  readonly VITE_ELASTIC_APM_ENVIRONMENT: string
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
    ELASTIC_APM_SERVICE_NAME?: string;
    ELASTIC_APM_SERVER_URL?: string;
    ELASTIC_APM_SERVICE_VERSION?: string;
    ELASTIC_APM_ENVIRONMENT?: string;
  }
}