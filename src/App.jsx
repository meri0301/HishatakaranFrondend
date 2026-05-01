import { memo } from 'react';

import AppRoutes from './routes/AppRoutes';

const App = memo(() => <AppRoutes />);

App.displayName = 'App';

export default App;
