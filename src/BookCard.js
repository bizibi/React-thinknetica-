import React from "react";
import AuthorsList from "./AuthorsList";
import SubscribeOrder from "./SubscribeOrder";

class BookCard extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Список книг пуст</div>;
    }

    const {
      book: {
        Title,
        About,
        Pages,
        Progress,
        Cover,
        Authors,
        Min_price,
        Authors_expectation,
        Collected_Amounted,
        Estimated_total,
        Subscribers,
      },
    } = this.props;

    return (
      <>
        <div style={styles.container}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={Cover} alt={Title}></img>
          </div>
          <div style={styles.cardBody}>
            <div style={styles.title}>{Title}</div>
            <div>{About}</div>
            <div>Страниц: {Pages} стр.</div>
            <div>Готовность: {Progress} %</div>
            <div style={styles.price}>Минимальная цена: {Min_price}</div>
            <div>Ожидаемая цена: {Authors_expectation}</div>
            <div>Собрано средств: {Collected_Amounted}</div>
            <div>Ожидаемая сумма: {Estimated_total}</div>
            {Subscribers >= 50 ? (
              <div style={styles.pop}>Подписалось: {Subscribers}</div>
            ) : (
              <div>Подписалось: {Subscribers}</div>
            )}
            <SubscribeOrder />
          </div>
        </div>
        <AuthorsList authors={Authors} />
      </>
    );
  }
}
export default BookCard;

const styles = {
  container: {
    display: "flex",
    fontFamily: "Helvetica, sans-serif",
  },

  imageBox: {
    maxWidth: "200px",
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
  cardBody: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "15px 15px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.05rem",
  },
  price: {
    fontWeight: "bold",
    fontSize: "1.05rem",
    letterSpacing: ".05rem",
  },
  pop: {
    color: "#e0539e",
    fontWeight: "bold",
  },
};
