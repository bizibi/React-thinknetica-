import React from "react";
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { allAuthors: false };
  }

  toggleAuthors() {
    this.setState({ allAuthors: !this.state.allAuthors });
  }

  render() {
    const { allAuthors } = this.state;
    const { authors } = this.props;
    const authorsCount = authors.length;
    const authorsFilterd = allAuthors ? authors : authors.slice(0, 3);

    return (
      <div>
        {authorsFilterd.map((author) => (
          <div key={author.id} style={styles.item}>
            <AuthorCard author={author} />
          </div>
        ))}
        {authorsCount > 3 && (
          <button onClick={() => this.toggleAuthors()}>
            {allAuthors
              ? "Скрыть авторов"
              : `Отобразить всех авторов (${authorsCount})`}
          </button>
        )}
      </div>
    );
  }
}

export default AuthorsList;

const styles = {
  item: {
    marginBottom: "50px",
  },
};
