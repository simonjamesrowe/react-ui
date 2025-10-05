#!/bin/sh
set -e

# Generate config.js from environment variables
cat > /usr/share/nginx/html/environment/config.js <<EOF
// Environment configuration
// This file is auto-generated at container startup from environment variables
window.API_URL = "${API_URL:-https://api.simonjamesrowe.com}";
window.GA_TRACKING_TOKEN = "${GA_TRACKING_TOKEN:-UA-179384022-3}";
window.HOT_JAR_TRACKING_TOKEN = "${HOT_JAR_TRACKING_TOKEN:-2022739}";
window.ENVIRONMENT = "${ENVIRONMENT:-production}";
window.APM_URL = "${APM_URL:-https://apm.simonjamesrowe.com}";
window.ELASTIC_APM_SERVICE_NAME = "${ELASTIC_APM_SERVICE_NAME:-react-ui}";
window.ELASTIC_APM_SERVER_URL = "${ELASTIC_APM_SERVER_URL:-${APM_URL:-https://apm.simonjamesrowe.com}}";
window.ELASTIC_APM_SERVICE_VERSION = "${ELASTIC_APM_SERVICE_VERSION:-1.0.0}";
EOF

echo "Generated environment configuration:"
cat /usr/share/nginx/html/environment/config.js

# Execute the main command (nginx)
exec "$@"
