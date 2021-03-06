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

export default function Post6() {

  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Conditional Rendering | {meta.title}</title>
          <meta
            name="description"
            content={meta.description}
          />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> Conditional Rendering </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="ab_block">
        <h1>Logical AND operator </h1>
        <p> Logical AND (&&) operator dapat digunakan untuk merender UI sesuai syarat kondisi . </p>
        <p> Misalkan untuk membuat notifikasi bertuliskan “You have 1 new notification” ketika user berinteraksi . </p>
        <p> Buat NotificationCard component , kita akan mencoba mengubah local state pada hook useState . </p>
        <MDEditor.Markdown source="`image`" />
        <ReactEmbedGist
          gist="RFebrians/2eedd4e427b9758bfdfe0ca4d13b5a5d"
        />

        <Row className="mb-5 mt-3">
          <Col lg="5">
            <h1 className="display-4 mb-4"> if ... else dan Ternary </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p> Kita dapat menggunakan if  … else statement untuk beberapa syarat kondisi atau conditional rendering </p>
        <p> Misalkan , tombol login dan log out </p>
        <MDEditor.Markdown source="`image`" />
        <p> Lihat bagan struktur berikut </p>
        <ReactEmbedGist
          gist="RFebrians/86c9987af89cd21f75dec5955045cb46"
        />
        <p> Atau alternatifnya anda dapat menggunakan Ternary operator sebagai pengganti if else dalam kondisi bersyarat </p>

        </div>
    </HelmetProvider>

  );
}
