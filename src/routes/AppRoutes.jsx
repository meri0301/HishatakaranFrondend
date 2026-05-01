import { memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PageLayout from '../components/layout/PageLayout';
import HomePage from '../pages/HomePage';
import PlaceholderPage from '../pages/PlaceholderPage';
import { ROUTE_PATHS } from './routePaths';

const AppRoutes = memo(() => (
  <Routes>
    <Route element={<PageLayout />}>
      <Route path={ROUTE_PATHS.home} element={<HomePage />} />
      <Route
        path={ROUTE_PATHS.culturalHeritages}
        element={<PlaceholderPage title="Cultural Heritages" />}
      />
      <Route path={ROUTE_PATHS.locations} element={<PlaceholderPage title="Locations" />} />
      <Route path={ROUTE_PATHS.programs} element={<PlaceholderPage title="Programs" />} />
      <Route path={ROUTE_PATHS.library} element={<PlaceholderPage title="Library" />} />
      <Route path={ROUTE_PATHS.gallery} element={<PlaceholderPage title="Gallery" />} />
      <Route path={ROUTE_PATHS.contact} element={<PlaceholderPage title="Contact Us" />} />
      <Route path={ROUTE_PATHS.donate} element={<PlaceholderPage title="Donate" />} />
      <Route path="*" element={<Navigate to={ROUTE_PATHS.home} replace />} />
    </Route>
  </Routes>
));

AppRoutes.displayName = 'AppRoutes';

export default AppRoutes;

