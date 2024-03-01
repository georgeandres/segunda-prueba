import { useState } from "react";
import { Footer } from "../components/Footer";
import Axios from "axios";

export const Register = () => {
  const [nombre, setNombre] = useState("");
  const [numId, setNunId] = useState(0);
  const [correo, setCorreo] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setpassword] = useState("");

  const add = () => {
    Axios.post("https://localhost:5173/create",{
      nombre : nombre,
      num_id : numId,
      correo : correo,
      phone : phone,
      password : password
    } ).then(()=>{
      alert('Usuario creado correctamente');
    });
  };

  return (
    <>
      <body id="login">
        <div className="container-form">
          <div className="information">
            <div className="info-childs">
              <h2>Bienvenido</h2>
              <p>Inicia sesión para acceder a nuestros servicios.</p>
            </div>
          </div>
          <div className="form-information">
            <div className="form-information-childs">
              <h2>Crear una cuenta</h2>
              <div className="icons">
                <i class="bx bxl-facebook-circle"></i>
                <i class="bx bxl-instagram"></i>
              </div>
              <p>Ingresa los datos</p>
              <form className="form">
                <label>
                  <i class="bx bx-user-plus"></i>
                  <input
                    onChange={(event) => {
                      setNombre(event.target.value);
                    }}
                    type="text"
                    placeholder="Nombre de usuario"
                  />
                </label>
                <label>
                  <i class="bx bx-id-card"></i>
                  <input
                    onChange={(event) => {
                      setNunId(event.target.value);
                    }}
                    type="text"
                    placeholder="numero de identificación"
                  />
                </label>
                <label>
                  <i class="bx bx-envelope"></i>
                  <input
                    onChange={(event) => {
                      setCorreo(event.target.value);
                    }}
                    type="email"
                    placeholder="Correo electrónico"
                  />
                </label>
                <label>
                  <i class="bx bx-phone-call"></i>
                  <input
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    type="text"
                    placeholder="Numero de contacto"
                  />
                </label>
                <label>
                  <i class="bx bxs-lock"></i>
                  <input
                    onChange={(event) => {
                      setpassword(event.target.value);
                    }}
                    type="password"
                    placeholder="Contraseña"
                  />
                </label>

                <input onClick={add} type="submit" value="Registrarse" />
              </form>
            </div>
          </div>
        </div>
      </body>

      <Footer />
    </>
  );
};
