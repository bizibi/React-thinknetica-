import React from "react";

import AuthorContext from "../../context/AuthorContext";

class UserInfo extends React.Component {
  render() {
    return (
      <AuthorContext.Consumer>
        {({ firstName, lastName, subscriberAvatar }) => (
          <div style={styles.container}>
            <div style={styles.imageBox}>
              <img style={styles.image} src={subscriberAvatar} />
            </div>
            <div style={styles.cardBody}>
              <div>
                {firstName} {lastName}
              </div>
            </div>
          </div>
        )}
      </AuthorContext.Consumer>
    );
  }
}

export default UserInfo;

const styles = {
  container: {
    display: "flex",
    fontFamily: "sans-serif",
    justifyContent: "center",
    alignItems: "right",
    float: "left",
    fontSize: "0.9rem",
  },
  imageBox: {
    borderRadius: "16px",
    height: "32px",
    lineHeight: "32px",
    width: "32px",
    backgroundColor: "#fff",
    display: "block",
    fontSize: 0,
    margin: "auto",
    overflow: "hidden",
    padding: 0,
    textAlign: "center",
    verticalAlign: "middle",
  },
  image: {
    width: "100%",
  },
  cardBody: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
  },
};
