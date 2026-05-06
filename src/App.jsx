import { memo } from 'react';

import AppRoutes from './routes/AppRoutes';
import SmoothScroll from './components/layout/smoothScroll';

const App = memo(() => (
    <SmoothScroll>
        <AppRoutes />
    </SmoothScroll>
));

App.displayName = 'App';

export default App;
