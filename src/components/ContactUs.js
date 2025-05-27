import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Fale conosco
              </p>
            </div>
          </div>
          <div className="row">
            <div class="contact__form-container">
              <form 
              id="Forms-Contato" method='POST' data-email="guara.space@ufma.br"
              action="https://script.google.com/macros/s/AKfycbz_ZWQpLI8cFv0Ja6WeAjrJg0SNGi4_YhBPezpsIBzDituB2AgEbz20qoi6FtLc-2QcGQ/exec"
              class="contact__form">
                <div class="contact__form-field">
                  <label class="contact__form-label" for="name">Nome</label>
                  <input
                    required
                    placeholder="Insira seu nome"
                    type="text"
                    class="contact__form-input"
                    name="name"
                    id="name"
                  />
                </div>
                <div class="contact__form-field">
                  <label class="contact__form-label" for="email">Email</label>
                  <input
                    required
                    placeholder="Insira seu e-mail"
                    type="text"
                    class="contact__form-input"
                    name="email"
                    id="email"
                  />
                </div>
                <div class="contact__form-field">
                  <label class="contact__form-label" for="message">Mensagem</label>
                  <textarea
                    required
                    cols="30"
                    rows="10"
                    class="contact__form-input"
                    placeholder="Insira sua mensagem"
                    name="message"
                    id="message"
                  ></textarea>
                </div>

                <div class="thankyou_message">
                  <h2><em>Obrigado </em> pelo contato! Retornaremos assim que possível! </h2>
                </div>

                <button type="submit" class="contact_btn">
                  Enviar
                </button>
              </form>
            </div>
      </div>
          
        </section>
        
        
        );
  }
}