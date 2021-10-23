import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../requests";

const HomeScreen = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Row
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
        title="NETFLIX ORIGINALS"
      />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries" />
    </div>
  );
};

export default HomeScreen;
