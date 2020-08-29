import React from "react";
import ReactDOM from "react-dom";

class SubscribeOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <>
        <a onClick={() => this.toggle()}>Условия подписки</a>
        {this.state.isOpen &&
          ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                Условия подписки
                <button onClick={() => this.toggle()}>Закрыть</button>
              </div>
            </div>,
            document.getElementById("modal-root")
          )}
      </>
    );
  }
}

export default SubscribeOrder;

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#fff",
    padding: "10px",
  },
};
