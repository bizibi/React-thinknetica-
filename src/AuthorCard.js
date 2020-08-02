import React from "react";

class AuthorCard extends React.Component {
  render() {
    const {
      author: {
        Name,
        Email,
        Avatar,
        Bio,
        Min_price,
        Authors_expectation,
        Collected_Amounted,
        Estimated_total,
      },
    } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.imageBox} src={Avatar} alt={Name}></img>
        </div>
        <div style={styles.cardBody}>
          <div>{Name}</div>
          <div>{Email}</div>
          <div>{Bio}</div>
          <div>{Min_price}</div>
          <div>{Authors_expectation}</div>
          <div>{Collected_Amounted}</div>
          <div>{Estimated_total}</div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;

const styles = {
  container: {
    display: "flex",
  },

  imageBox: {
    maxWidth: "100px",
  },
  image: {
    width: "100%",
  },
  cardBody: {
    flex: "1",
  },
};
