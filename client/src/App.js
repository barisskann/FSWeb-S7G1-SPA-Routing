import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Link, Routes } from "react-router-dom";
import Film from "./Filmler/Film";
import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import FilmListesi from "./Filmler/FilmListesi";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  let [id, setİd] = useState(0);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((res) => setMovieList(res.data))

        // Bu kısmı log statementlarıyla çalışın
        // ve burdan gelen response'u 'movieList' e aktarın

        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, [id]);
  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (
    <div>
      <KaydedilenlerListesi list={movieList} />
      <Switch>
        <Route exact path="/">
          <FilmListesi movies={movieList} setİd={setİd} id={id} />
        </Route>
        <Route path={"/"}>
          <Film id={id} />
        </Route>
      </Switch>
    </div>
  );
}
