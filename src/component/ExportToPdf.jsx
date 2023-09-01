import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";
import ReactPDF, {
  Document,
  Page,
  View,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { Html } from "react-pdf-html";
import { createRoot } from "react-dom/client";

const ExportToPdf = (props) => {
  const element = (
    <html>
      <body style={{ fontSize: "12px", margin: "14px", padding: "14px" }}>
        <h5 style={{ textAlign: "center" }}>persons</h5>
        <table>
          <thead>
            <tr style={{ borderBottom: "2 solid black", padding: "3" }}>
              <th>photo</th>
              <th>name</th>
              <th>email</th>
              <th>birthday</th>
            </tr>
          </thead>
          <tbody>
            {props.persons.map((data) => (
              <tr
                key={data.id}
                style={{ borderBottom: "1 solid black", padding: "3" }}
              >
                <td>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1 solid black",
                      borderRadius: "9999px",
                    }}
                    src={data.photo}
                  />
                </td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.birthday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </html>
  );

  const html = ReactDOMServer.renderToStaticMarkup(element);

  const MyDocument = () => (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4">
          <View>
            <Html>{html}</Html>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );

  const handleExport = () => {
    const root = createRoot(document.getElementById("root"));
    root.render(<MyDocument />);
  };

  return (
    <>
      <button
        onClick={handleExport}
        className="text-white hover:text-greenLight p-2 text-sm shadow-md shadow-white hover:shadow-greenLight rounded-md m-2"
        type="button"
      >
        export to pdf
      </button>
    </>
  );
};

export default ExportToPdf;
