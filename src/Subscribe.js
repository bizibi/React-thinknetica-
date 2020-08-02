import React from "react";

class Subscribe extends React.Component {
  render() {
    const {
      subscribe: { TargetMessage, Email, Button },
    } = this.props;

    return (
      <form>
        <div style={styles.formWraper}>
          <div className="formBody">
            <p className="formHeader">{TargetMessage}</p>
            <div className="inputName">
              <input type="text" placeholder="Name"></input>
            </div>
          </div>
          <div className="inputMail">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="submitButton">
            <input type="submit" value="ПОДПИСАТЬСЯ"></input>
          </div>
        </div>
      </form>
    );
  }
}

export default Subscribe;

const styles = {
  formWraper: { border: "2px solid #f1f1f1", backgroundColor: "#f1f1f1" },
};
