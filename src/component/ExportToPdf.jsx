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
  // const imageUrl = "https://i.postimg.cc/vZ6D7780/IMG-20230826-WA0000.jpg";
  // const imageUrl =
  //   "http://localhost:8080/img/portofolio/1692587568_82f4567dde2908d589a3.png";

  // const [base64Image, setBase64Image] = useState("");

  // const convertToBase64 = async (imageUrl) => {
  //   try {
  //     const response = await fetch(imageUrl);
  //     const blob = await response.blob();

  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const base64data = reader.result;
  //       setBase64Image(base64data);
  //     };
  //     reader.readAsDataURL(blob);
  //   } catch (error) {
  //     console.error("Error converting image to base64:", error);
  //   }
  // };

  // convertToBase64(imageUrl);

  const element = (
    <html>
      <body style={{ fontSize: "12px", margin: "14px", padding: "14px" }}>
        <h5 style={{ textAlign: "center" }}>persons</h5>
        <table>
          <thead>
            <tr style={{ borderBottom: "2 solid black", padding: "3" }}>
              {/* <th>photo</th> */}
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
                {/* <td>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1 solid black",
                      borderRadius: "9999px",
                    }}
                    // src="http://localhost:8080/img/portofolio/1692587568_82f4567dde2908d589a3.png"
                    src={base64Image}
                  />
                </td> */}
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

  // Create Document Component
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
