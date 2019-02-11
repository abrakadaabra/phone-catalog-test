/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from 'global-styles';
import LoadingIndicator from 'components/LoadingIndicator';
import Catalog from 'containers/Catalog/Lazy';
import PhoneDetails from 'containers/PhoneDetails/Lazy';
import About from 'containers/About/Lazy';
import Layout from 'containers/Layout';
import NotFound from 'components/NotFound/Lazy';
import ErrorBoundary from 'components/ErrorBoundary';

export default function App() {
  return (
  <ErrorBoundary>
    <Layout>
      <Suspense fallback={<LoadingIndicator/>}>
        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/phones/:id" component={PhoneDetails} />
          <Route path="/about" component={About} />
          <Route path="" component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
    <GlobalStyle />
  </ErrorBoundary>
  );
};

