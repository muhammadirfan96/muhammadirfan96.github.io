import { useEffect, useState } from "react";
import {
  infoAlert,
  questionAlert,
  successAlert,
  warningAlert,
} from "../functions/alert";
import axios from "axios";
import ExportToXls from "./ExportToXls";
import ExportToPdf from "./ExportToPdf";

const Comments = () => {
  // const api = "http://localhost:8080/persons";
  const api = "https://server.webpunagaya.com/persons";
  const [persons, setPersons] = useState([]);

  const [keyPencarian, setKeyPencarian] = useState("*");
  const [limit, setLimit] = useState(2);
  const [offset, setOffset] = useState(0);
  const [allPage, setAllPage] = useState(0);
  const [crrPage, setCrrPage] = useState(1);

  const [open, setOpen] = useState(false);
  const [submit, setSubmit] = useState(true);
  const [idUpdate, setIdUpdate] = useState(0);
  const [name, setName] = useState("");
  const [coment, setComent] = useState("");
  const [photo, setPhoto] = useState("");
  const [previewPhoto, setPreviewPhoto] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const toggleModal = () => {
    setName("");
    setComent("");
    setPhoto("");
    setPreviewPhoto("");
    setErrMsg("");
    setOpen(!open);
  };

  const handleAddPersons = () => {
    toggleModal();
    setSubmit(true);
  };

  const handleUpdatePersons = async (id) => {
    toggleModal();
    const find = await axios.get(`${api}/${id}`);
    setName(find.data.name);
    setComent(find.data.coment);
    setPreviewPhoto(find.data.photo);
    setSubmit(false);
    setIdUpdate(id);
  };

  const handleOffset = (index, limit) => {
    setCrrPage(index + 1);
    setOffset(limit * (index + 1) - limit);
  };

  const handleLimit = (limit) => {
    setLimit(limit);
  };

  const handleSeacrh = (key) => {
    setKeyPencarian(key);
  };

  useEffect(() => {
    getPersons();
  }, [keyPencarian, limit, offset]);

  const pageButton = () => {
    const button = [];
    for (let index = 0; index < allPage; index++) {
      button.push(
        <button
          key={index}
          className={`${
            crrPage == index + 1 ? "bg-greenLight" : "bg-white"
          } px-1 m-1 rounded-sm text-center text-green-950`}
          onClick={() => handleOffset(index, limit)}
          type="button"
        >
          {index + 1}
        </button>
      );
    }
    return button;
  };

  const getPersons = async () => {
    try {
      const responseAll = await axios.get(`${api}/find/${keyPencarian}`);
      setAllPage(Math.ceil(responseAll.data.length / limit));

      const response = await axios.get(
        `${api}/find/${keyPencarian}/${limit}/${offset}`
      );
      setPersons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletePersons = async (id) => {
    try {
      const response = await axios.delete(`${api}/${id}`);
      getPersons();
      successAlert(response.data.messages.success);
    } catch (error) {
      console.log(error);
    }
  };

  const addPersons = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("coment", coment);
    formData.append("photo", photo);
    try {
      const response = await axios.post(`${api}`, formData);
      console.log(response);
      getPersons();
      toggleModal();
      successAlert(response.data.messages.success);
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data.messages);
    }
  };

  const updatePersons = async (event, id) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("coment", coment);
    formData.append("photo", photo);
    formData.append("_method", "PATCH");
    try {
      const response = await axios.post(`${api}/${id}`, formData);
      getPersons();
      toggleModal();
      successAlert(response.data.messages.success);
    } catch (error) {
      console.log(error);
      setErrMsg(error.response.data.messages);
    }
  };

  const imgPreview = (e) => {
    const image = e.target.files[0];
    setPhoto(image);
    setPreviewPhoto(URL.createObjectURL(image));
  };

  return (
    <>
      <div
        id="comments"
        className="w-[95%] md:w-[80%] lg:w-[60%] text-center mx-auto shadow-md shadow-white rounded-md text-sm mt-8 mb-4 pt-1 pb-4 relative"
      >
        <p className="text-white text-center p-2 text-base">comments</p>

        <div className="flex flex-wrap justify-evenly">
          <div className="w-[42%] md:w-[23%] shadow-md shadow-white rounded-md m-2 text-white hover:shadow-greenLight hover:text-greenLight">
            <button
              className="p-2 outline-none w-full"
              onClick={handleAddPersons}
              type="button"
            >
              + add data
            </button>
          </div>

          <div className="w-[42%] md:w-[23%] shadow-md shadow-white rounded-md m-2 text-white hover:shadow-greenLight hover:text-greenLight">
            <input
              className="p-2 outline-none w-full bg-green-950 rounded-md"
              onChange={(e) => handleSeacrh(e.target.value)}
              type="text"
              value={keyPencarian}
              placeholder="name@..."
              autoComplete="off"
              autoFocus
            />
          </div>

          <div className="w-[42%] md:w-[23%] flex justify-evenly overflow-auto shadow-md shadow-white rounded-md m-2 p-2 text-white hover:shadow-greenLight hover:text-greenLight">
            <select
              className="outline-none bg-green-950"
              value={limit}
              onChange={(e) => handleLimit(e.target.value)}
            >
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
            <span>per page</span>
          </div>

          <div className="w-[42%] md:w-[23%] flex justify-evenly shadow-md shadow-white rounded-md m-2 p-2 text-white ">
            <span>page</span>
            <div className="flex overflow-auto">{pageButton()}</div>
          </div>
        </div>

        <div className="p-2 mx-2">
          {persons.map((data, index) => (
            <div key={index} className="flex gap-2 text-white mb-4">
              <div className="w-[12%]">
                <img
                  className="w-12 h-12 border border-white rounded-full"
                  src={data.photo}
                  alt={data.photo}
                />
              </div>
              <div className="w-[86%]">
                <div className="flex justify-between border-b mb-2 p-1">
                  <p>{data.name}</p>
                  <div>
                    <button
                      onClick={() =>
                        questionAlert(
                          "the selected data will be permanently deleted. are you sure?",
                          () => deletePersons(data.id),
                          () => infoAlert("deleting data canceled")
                        )
                      }
                      className="mx-2 hover:text-greenLight"
                    >
                      <i className="bi-trash"></i>
                    </button>
                    <button
                      onClick={() =>
                        warningAlert(
                          "the selected data will be overwritten",
                          () => handleUpdatePersons(data.id)
                        )
                      }
                      className="mx-2 hover:text-greenLight"
                    >
                      <i className="bi-pen"></i>
                    </button>
                  </div>
                </div>
                <p className="italic text-left text-xs">{data.coment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-0">
          <ExportToXls persons={persons} />
        </div>
      </div>

      {/* modal tambah dan update */}
      <div
        className={`fixed top-0 bottom-0 right-0 left-0 bg-slate-900 bg-opacity-50 z-10 ${
          open ? null : "hidden"
        }`}
      >
        <div className="bg-white rounded-md p-4 relative w-[95%] md:w-[50%] my-4 max-h-[95%] mx-auto overflow-auto">
          <button
            className="absolute right-1 top-0"
            onClick={toggleModal}
            type="button"
          >
            <i className="bi-x-square-fill text-red-700 rounded-md text-xl"></i>
          </button>
          <p className="text-center font-medium text-lg">coments</p>
          {errMsg ? (
            <div className="bg-red-50 rounded-md p-1 my-1 text-xs italic text-red-700 border border-red-900">
              {Object.keys(errMsg).map((msg, i) => (
                <p key={i}>{errMsg[msg]}</p>
              ))}
            </div>
          ) : (
            ""
          )}
          <form
            onSubmit={
              submit
                ? (event) => addPersons(event)
                : (event) => updatePersons(event, idUpdate)
            }
            className="mt-2"
            encType="multipart/form-data"
          >
            <input
              className="w-full p-1 mb-2 outline-none border border-green-950 rounded-md"
              placeholder="your name..."
              type="text"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="w-full p-1 mb-2 outline-none border border-green-950 rounded-md"
              placeholder="coment..."
              autoComplete="off"
              value={coment}
              onChange={(e) => setComent(e.target.value)}
            />
            <div className="flex flex-wrap my-2">
              <div>
                <label className="p-1 border border-green-950 rounded-md">
                  logo
                  <input className="hidden" type="file" onChange={imgPreview} />
                </label>
              </div>
              {previewPhoto ? (
                <img
                  src={previewPhoto}
                  alt={previewPhoto}
                  className="w-24 h-24 rounded-full"
                />
              ) : (
                ""
              )}
            </div>
            <button
              className="bg-green-950 text-lg text-white font-medium py-1 rounded-md w-full"
              type="submit"
            >
              {submit ? "submit" : "save change"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
