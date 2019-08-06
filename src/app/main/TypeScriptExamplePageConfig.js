import React from 'react';

export const TypeScriptExamplePageConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/typescript-example-page',
            component: React.lazy(() => import('./TypeScriptExamplePage'))
        }
    ]
};
