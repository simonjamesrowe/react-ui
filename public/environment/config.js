// Environment configuration
// This file provides runtime configuration for the application
window.API_URL = window.API_URL || "https://api.simonjamesrowe.com";
window.GA_TRACKING_TOKEN = window.GA_TRACKING_TOKEN || "UA-179384022-3";
window.HOT_JAR_TRACKING_TOKEN = window.HOT_JAR_TRACKING_TOKEN || "2022739";
window.ENVIRONMENT = window.ENVIRONMENT || "development";
window.APM_URL = window.APM_URL || "https://apm.simonjamesrowe.com";

// Additional config for development
window.ELASTIC_APM_SERVICE_NAME = window.ELASTIC_APM_SERVICE_NAME || "react-ui";
window.ELASTIC_APM_SERVER_URL = window.ELASTIC_APM_SERVER_URL || window.APM_URL;
window.ELASTIC_APM_SERVICE_VERSION = window.ELASTIC_APM_SERVICE_VERSION || "1.0.0";
window.ELASTIC_APM_ENVIRONMENT = window.ELASTIC_APM_ENVIRONMENT || window.ENVIRONMENT;