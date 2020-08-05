import React from "react";

class BookCard extends React.Component {
  render() {
    const {
      books: { Title, About, Pages, Progress, Cover },
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={Cover} alt={Title}></img>
        </div>
        <div style={styles.cardBody}>
          <div style={styles.title}>{Title}</div>
          <div>{About}</div>
          <div>{Pages}</div>
          <div>{Progress}</div>
        </div>
      </div>
    );
  }
}
export default BookCard;

const styles = {
  container: {
    display: "flex",
  },

  imageBox: {
    maxWidth: "200px",
  },
  image: {
    width: "100%",
  },
  cardBody: {
    flex: "1",
  },
  title: { fontWeight: "bold" },
};
