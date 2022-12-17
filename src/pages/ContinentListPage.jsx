import { A } from '@solidjs/router';
import styles from '../App.module.css';

export default function ContinentListPage() {
  return (
    <>
      <section class="section">
        <div class="container">
          <h2 class="page-title">List of continent in the world</h2>
          <ul class="continent-list">
            <li>
              <A href="/continent/europe">Europe</A>
            </li>
            <li>
              <A href="/continent/america">America</A>
            </li>
            <li>
              <A href="/continent/asia">Asia</A>
            </li>
            <li>
              <A href="/continent/africa">Africa</A>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
