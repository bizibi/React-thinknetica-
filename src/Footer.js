import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer style={styles.footer}>
          &copy; {new Date().getFullYear()}, EpixaloticA
        </footer>
      </>
    );
  }
}

export default Footer;

const styles = {
  footer: {
    padding: "0 5%",
    marginTop: "30px",
  },
};
