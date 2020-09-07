import React from "react";

class AskAuthorForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      question: e.target.question.value,
    };

    console.log(formData);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} style={styles.form}>
        <div>
          <label>Имя</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label>Email </label>
          <input type="email" id="email" />
        </div>
        <div>
          <label>Вопрос автору</label>
          <textarea id="question" />
        </div>
        <button type="submit">Отправить вопрос</button>
      </form>
    );
  }
}

export default AskAuthorForm;

const styles = {
  form: {
    marginTop: "10px",
  },
};
