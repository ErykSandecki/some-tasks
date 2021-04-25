import React from 'react';

import { Spin  } from 'antd';

// styles
import './style.css';

export const Loader = () => (
    <section className="Loader">
        <Spin size="large"/>
    </section>
);

export default Loader;