import { lazy } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import styles from './App.module.css';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ContinentListPage = lazy(() => import('./pages/ContinentListPage.jsx'));
const ContinentDetailPage = lazy(() =>
  import('./pages/ContinentDetailPage.jsx')
);

const PopularPage = lazy(() => import('./pages/PopularPage.jsx'));
const TrandingPage = lazy(() => import('./pages/TrandingPage.jsx'));

function App() {
  return (
    <>
      <header class={styles.pageHeader}>
        <div class="container">
          <nav class="header-nav">
            <A href="/">Home</A>
            <A href="/continents">Continents</A>
            <A href="/popular">Popular Movies</A>
            <A href="/tranding">Tranding Movies</A>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/continent/:name" component={ContinentDetailPage} />
        <Route path="/continents" component={ContinentListPage} />
        <Route path="/popular" component={PopularPage} />
        <Route path="/tranding" component={TrandingPage} />
      </Routes>
    </>
  );
}

export default App;
