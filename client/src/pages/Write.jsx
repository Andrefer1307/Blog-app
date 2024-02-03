import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publicar</h1>
          <span>
            <b>Estado: </b> Borrador
          </span>
          <span>
            <b>Visibilidad: </b> Publico
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Subir imagen
          </label>
          <div className="buttons">
            <button>Guardar como borrador</button>
            <button onClick={handleClick}>Publicar</button>
          </div>
        </div>
        <div className="item">
          <h1>Categorìa</h1>
          <div className="cat">
            <input
              type="checkbox"
              checked={cat === "acerca"}
              name="cat"
              value="acerca"
              id="acerca"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="acerca">Quiénes Somos</label>
          </div>
          <div className="cat">
            <input
              type="checkbox"
              checked={cat === "servicios"}
              name="cat"
              value="servicios"
              id="servicios"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="servicios">Servicios</label>
          </div>
          <div className="cat">
            <input
              type="checkbox"
              checked={cat === "destinos"}
              name="cat"
              value="destinos"
              id="destinos"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="destinos">Destinos</label>
          </div>
          <div className="cat">
            <input
              type="checkbox"
              checked={cat === "noticias"}
              name="cat"
              value="noticias"
              id="noticias"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="noticias">Noticias</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;

