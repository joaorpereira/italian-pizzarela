import React from "react";
import "./styles.css";

import { medias } from "./constants";
import useForm from "../../hooks/useForm";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contato = () => {
  const [form, setForm, handleInputChange] = useForm(INITIAL_STATE);

  const handleForm = e => {
    e.preventDefault();
    if (form.name && form.email && form.phone && form.message) {
      alert(`
        Nome: ${form.name},
        Email: ${form.email},
        Telefone: ${form.phone},
        Mensagem: ${form.message}
      `);
    } else {
      alert(`Nome, Email, Telefone, Mensagem são campos obrigatórios`);
    }
    setForm(INITIAL_STATE);
  };

  return (
    <footer className="contact__section" id="contact">
      <div className="contact__container">
        <div className="contact__item">
          <div className="contact__title">
            <h2>Contato</h2>
            <h3>(31) 99999-9999</h3>
          </div>
          <form className="form__container" onSubmit={handleForm}>
            <div className="form__field">
              <div className="form__item">
                <label>Nome</label>
                <input
                  value={form.name}
                  onChange={handleInputChange}
                  type="text"
                  name="name"
                />
              </div>
              <div className="form__item">
                <label>Telefone</label>
                <input
                  value={form.phone}
                  onChange={handleInputChange}
                  type="tel"
                  name="phone"
                />
              </div>
            </div>
            <label>Email</label>
            <input
              value={form.email}
              onChange={handleInputChange}
              type="email"
              name="email"
            />
            <label>Mensagem</label>
            <textarea
              value={form.message}
              onChange={handleInputChange}
              name="message"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact__item information">
          <h2>Localização</h2>
          <iframe
            className="media"
            title="Italian Pizzarela"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871.5443255116845!2d-43.80191207413414!3d-20.25515781859092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE1JzIyLjEiUyA0M8KwNDgnMDguNiJX!5e0!3m2!1spt-BR!2sbr!4v1624053126443!5m2!1spt-BR!2sbr"
          />
        </div>
      </div>
      <ul className="media__icons">
        {medias.map(item => (
          <li key={item.image}>
            <a href={item.link}>
              <img src={item.image} alt={item.image} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Contato;
