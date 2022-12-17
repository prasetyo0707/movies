import { createSignal, For } from 'solid-js';
import { useParams } from '@solidjs/router';
import fetchCountryList from '../services/fetchCountryList';

export default function ContinentDetailPage() {
  const params = useParams();
  const continentName = params.name;
  const [countryList, setCountryList] = createSignal([]);

  fetchCountryList(continentName).then((data) => {
    setCountryList(data);
  });

  return (
    <>
      <section class="section">
        <div class="container">
          <h2 class="page-title">List of countries in {continentName}</h2>
          <div>
            <ul class="country-list">
              <For each={countryList()}>
                {(country, index) => (
                  <li>
                    <ul class="contry-data">
                      <li>Country code: {country.name.official}</li>
                      <li>Country name: {country.cca2}</li>
                    </ul>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
