import React, { Component } from 'react';
(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) === pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.contact__form");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();

export default class ContactUs extends Component {
  render() {
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
                
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

                <div class="thankyou_message" >
                  <span class="text-thank">Obrigado pelo contato! Retornaremos assim que possível! </span>
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