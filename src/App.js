import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Articles, Header, ModalAddArticle } from "./components"

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("https://5c3755177820ff0014d92711.mockapi.io/articles")
      .then(({ data }) => {
        dispatch({
          type: "PUSH_ARTICLES",
          payload: data
        })
      });
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />
      <Articles />
      <ModalAddArticle />
    </div>
  );
}

export default App;
