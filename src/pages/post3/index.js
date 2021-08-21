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
  services
} from "../../content_option";

export default function Post3() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Styling | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Row className="mb-5 mt-3">
        <Col lg="5">
          <h1 className="display-4 mb-4"> Styling in React </h1>{" "}
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <div className="ab_block">
        <br></br>
        <h4>
          Pada React kita dapat menggunakan beberapa Styling untuk Components ,
          diantaranya adalah CSS , SCSS atau Styled Components dari Libraries
          untuk React .
        </h4>
        <br></br>
        <blockquote> Mari kita buat button seperti gambar berikut </blockquote>
        <p> Buat Component </p>
        <ReactEmbedGist
          gist="RFebrians/8c738e035bae4d36fed44a682c0bfd23"
        />
        <p>image</p>
        <h2>Metode 1 CSS</h2>
        <div>
          <ReactEmbedGist
            gist="RFebrians/dbab5e9fbb0fa5547d6e96f27330a344"
          />
        </div>
        <p>Dari kesimpulan code diatas </p>
        <li> Untuk menghubungkan style pada CSS diperlukan props className yang berada pada file style.css </li>
      </div>

      <div className="ab_block">
        <h2>Metode 2 Styled Component</h2>
        <p> Lakukan penginstalan pada npm untuk menginstall styled component pada react </p>
        <MDEditor.Markdown source="`$ npm install styled-components `" />
        <ReactEmbedGist
          gist="RFebrians/40adfd215d456d0d46655d7600bd57d7"
        />
        <br></br>
        <p>Kesimpulan Styled Component </p>
        <li>Styled Component biasanya ditaruh pada bawah setelah file ekspor dalam file yang sama </li>
      </div>
    </HelmetProvider>
  );
}
