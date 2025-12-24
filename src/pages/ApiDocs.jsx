import React, { useEffect } from 'react';

export default function ApiDocs() {
  useEffect(() => {
    import('swagger-ui-react/swagger-ui.css').catch(() => {});
  }, []);

  const SwaggerUI = React.lazy(() => import('swagger-ui-react'));

  return (
    <React.Suspense fallback={<div>Loading API docs...</div>}>
      <div style={{ padding: 12 }}>
        <SwaggerUI
          url="/openapi.yaml"
          docExpansion="none"
        />
      </div>
    </React.Suspense>
  );
}
