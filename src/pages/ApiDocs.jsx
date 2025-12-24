import React, { useEffect } from 'react';

export default function ApiDocs() {
  useEffect(() => {
    import('swagger-ui-react/swagger-ui.css').catch(() => {});
  }, []);

  const SwaggerUI = React.lazy(() => import('swagger-ui-react'));

  const base = (typeof document !== 'undefined' && document.querySelector('base')?.getAttribute('href')) || '/';
  const specUrl = base + 'openapi.yaml';

  return (
    <React.Suspense fallback={<div>Loading API docs...</div>}>
      <div style={{ padding: 12 }}>
        <SwaggerUI
          url={specUrl}
          docExpansion="none"
        />
      </div>
    </React.Suspense>
  );
}
