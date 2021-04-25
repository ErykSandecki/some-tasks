import React from 'react';

import { PageHeader  } from 'antd';

export const PageTitle = ({ title }) => (
    <PageHeader 
        title={title} 
        style={{
            border: '1px solid rgb(235, 237, 240)',
            marginBottom: '50px'
        }}
    />
);

export default PageTitle;