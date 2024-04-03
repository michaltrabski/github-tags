import { useEffect, useState } from "react";
import fakeRes from "./data/fakeRes.json";

import DataGridDemo from "./components/Table";

import "./App.css";

export interface PaginationModel {
  pageSize: number;
  page: number;
}

export interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

function App() {
  const [tags, setTags] = useState<Tag[]>([]);

  const [paginationModel, setPaginationModel] = useState<PaginationModel>({
    pageSize: 5,
    page: 0,
  });

  const handleChange = (value: string) => {
    if (parseInt(value) < 1) {
      alert("Value must be greater than 0");
      return;
    }

    setPaginationModel((prev) => ({
      ...prev,
      pageSize: parseInt(value),
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow");
      // const data = await response.json();
      // setTags(data);

      setTags(fakeRes.items);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <p>
          Treść zadania: Przygotować w React interfejs użytkownika przeglądarki tagów udostępnianych przez API
          StackOverflow (https://api.stackexchange.com/docs). Założenia projektu:
        </p>
        <ul>
          <li>stronicowana tabela lub lista tagów wraz liczbą powiązanych postów (pole count)</li>
          <li>liczba elementów na stronie konfigurowalna przez pole liczbowe nad tabelą/listą</li>
          <li>wybór pola i kierunku sortowania przez element UI własnego wyboru/projektu</li>
          <li>przygotować odpowiednie stany dla etapu ładowania danych i błędów przy pobieraniu</li>
          <li>wykorzystać gotową bibliotekę komponentów UI, np. MUI</li>
          <li>
            wykorzystać gotowe biblioteki do zarządzania stanem i pobierania danych (wybór wedle uznania, stosownie do
            stopnia komplikacji projektu i z myślą o jak najszybszej realizacji zadania)
          </li>
          <li>przygotować Storybook do prezentacji wykorzystanych komponentów składowych aplikacji</li>
          <li>rozwiązanie opublikować w repozytorium GitHub</li>
          <li>
            całość powinna się uruchamiać wyłącznie po wykonaniu komend "npm ci", "npm start", "npm run storybook"
          </li>
        </ul>
      </div>
      <h1>Tags</h1>
      <p>Tags from StackOverflow API</p>

      <div>
        Set amount of items per page:{" "}
        <input type="number" value={paginationModel.pageSize} onChange={(e) => handleChange(e.target.value)} />
      </div>
      <DataGridDemo tags={tags} paginationModel={paginationModel} setPaginationModel={setPaginationModel} />
    </div>
  );
}

export default App;
