import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const articles = useSelector(state => state.articles);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("https://5c3755177820ff0014d92711.mockapi.io/articles")
      .then(({ data }) => {
        console.log(data)
        dispatch({
          type: "PUSH_ARTICLES",
          payload: data
        })
      });
    // eslint-disable-next-line
  }, [])

  console.log(articles)

  return (
    <div className="App">
      {articles.map(article => {
        console.log(article)
        return (
          <div key={article.id}>
            <div>{article.title}</div>
            <div>{article.text}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
