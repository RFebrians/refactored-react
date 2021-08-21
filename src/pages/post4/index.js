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

export default function Post4() {

  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Props | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Style and Props </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>Style and Props</h1>
        <p>Style dan Props , lalu apa hubungannya ? </p>
        <blockquote>Props kepanjangannya adalah properties . Props merupakan value yang dapat di pass ke children component </blockquote>
        <blockquote>Sedangkan Style disini hanya sebagai percobaan untuk membedakan </blockquote>
        <p>Untuk lebih jelasnya mari mencoba mempraktikan props dengan style  </p>
        <p> Contoh kita buat Button Components </p>
        <ReactEmbedGist
          gist="RFebrians/5658eff0293ae24f2d6f70d89b5f0f5d"
        />
        <br></br>
        <h4>Pass a Prop </h4>
        <br></br>
        <MDEditor.Markdown source="`images`" />
        <ReactEmbedGist
          gist="RFebrians/228f72cbbb81a94d70164ef3e46517be"
        />
        </div>
        <div className="ab_block">

        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Props </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p> Kita telah mengetahui perbedaan dan penggunaan props pada styling , tetapi apakah props itu sebenarnya ? </p>
        <p> props kepanjangan dari properties , dan bisa digunakan untuk passing data antar components . </p>
        <p> props merupakan read-only dan tidak dapat diubah . </p>
        <p> props hanya dapat diturunkan dari parent component . </p>
        <h1> Parent Component dan Child Component </h1>
        <p> Katakanlah kita mempunyai sebuah Card Component , yang di dalamnya ada Button . </p>
        <li> Karena Button berada di dalam Card , maka Button itu dikatakan Child . </li>
        <li> Sedangkan Card adalah Parent . </li>
        <blockquote> Ibarat kehidupan nya , child (anak) dapat menurunkan props (sifat) dari parent (orang tua) . </blockquote>
        <MDEditor.Markdown source="`image`" />


        <h3> Contoh berikut kita akan mencoba membuat component Card dengan props sebagai Button yang Active . </h3>
        <h4> Create Parent Component </h4>
        <ReactEmbedGist
          gist="RFebrians/18e8683b96267165c241afa261855ced"
        />


        <h4> Create Child Component </h4>
        <p> Kita akan membuat child component MyButton . </p>
        <p> Jadi Mycard adalah Parent , dan MyButton adalah Child . </p>
        <p> Untuk membedakannya kita gunakan styled component . Warna biru gradien adalah Active dan abu-abu adalah Inactive .</p>
        <ReactEmbedGist
          gist="RFebrians/bac8f2d1d35bc0e0578808c8d500e078"
        />
        </div>

    </HelmetProvider>

  );
}
