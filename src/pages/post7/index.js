import React from "react";
import "./style.css";
import MDEditor from "@uiw/react-md-editor";
import ReactEmbedGist from "react-embed-gist";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export default function Post7() {

  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Getting the Data | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Load Local Data </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>Load Local Data </h1>
        <p> Sebagai bahan praktisi , untuk dapat memuat Sample Data seperti menu bar pada website . </p>
        <p> Kita akan menggunakan Destructuring Array untuk memuat data . </p>
        <h4> Create Data Array </h4>
        <p> Buat data dengan nama menuData untuk di import nantinya , </p>
        <ReactEmbedGist
          gist="RFebrians/da14c78a6361fcfcff78d99588ec545b"
        />

        <h4> Kita akan membuat NavigationButton Component kemudian image (icon) dan title bertindak sebagai props . </h4>
        <ReactEmbedGist
          gist="RFebrians/e4a21725db28702a007225b455f88b13"
        />

        <h4> Buat Entry point  </h4>
        <p> Masukan kode berikut pada App.js sebagai entry point kemudian import menuData </p>
        <ReactEmbedGist
          gist="RFebrians/8f77c208e37dbfef32e41273f312c9d9"
        />

        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Fetching Data from API </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p> Hal yang sering ditemui saat membangun sebuah Aplikasi , baik website , mobile maupun platform lain adalah fetching data . </p>
        <p> Fetch (mengambil ) data setidaknya membutuhkan sebuah API (Application Program Interface ) . </p>
        <p> Untuk memulai kita perlu mengambil JSON API , dengan fetch function serta useEffect Hook . </p>
        <p> Mari kita pakai https://api.adviceslip.com/ sebagai API percobaan . </p>
        <blockquote> https://api.adviceslip.com/ akan menampilkan advice (saran) sebagai target API teks yang akan kita peroleh . </blockquote>
        <MDEditor.Markdown source="`image`" />

        <h5> Gunakan useEffect </h5>
        <MDEditor.Markdown source="`gist loaded`" />

        <h5> Mounting URL </h5>
        <p> Jabarkan penggunaan Mounting (useEffect) yang mengarah ke URL API target </p>

      <MDEditor.Markdown source="`gist loaded`" />
      <MDEditor.Markdown source="`image`" />

        </div>
    </HelmetProvider>

  );
}
