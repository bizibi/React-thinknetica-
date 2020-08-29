import React from "react";

class AuthorCard extends React.Component {
  render() {
    if (!this.props.author) {
      return <div>Список авторов пуст</div>;
    }

    const {
      author: { Name, Email, Avatar, Bio },
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Avatar} alt={Name} />
        </div>
        <div style={styles.cardBody}>
          <div style={styles.name}>{Name}</div>
          <div>{Email}</div>
          <div>{Bio}</div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;

const styles = {
  container: {
    display: "flex",
    fontFamily: "sans-serif",
  },

  imageBox: {
    borderRadius: "30px",
    height: "100px",
    lineHeight: "100px",
    width: "80px",
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
    borderRadius: "100px",
    border: "3px solid green",
    boxShadow: "0 0 10px #7f74f2",
  },
  cardBody: {
    flex: "1",
    display: "flex",
    flexDirextion: "column",
    justifyContent: "space-between",
    padding: "15px 10px",
  },
  name: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
  },
};
