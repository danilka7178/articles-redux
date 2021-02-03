import React from "react";
import axios from "axios";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function Header() {
   const [inputValue, setInputValue] = React.useState("");
   const dispatch = useDispatch();

   const doDispatch = (what, data = []) => {
      dispatch({
         type: what,
         payload: data
      })
   }

   const handleChangeInput = (e) => {
      setInputValue(e.target.value);
   }

   const handleClickSearch = (e) => {
      e.preventDefault();

      if (inputValue) {
         axios.get(`https://5c3755177820ff0014d92711.mockapi.io/articles?title=${inputValue.trim("")}`)
            .then(({ data }) => {
               if (!data.length) {
                  axios.get(`https://5c3755177820ff0014d92711.mockapi.io/articles?text=${inputValue.trim("")}`)
                     .then(({ data }) => {
                        doDispatch("FILTER_ARTICLES", data)
                     })
               } else {
                  doDispatch("FILTER_ARTICLES", data)
               }
            })
      } else {
         axios.get("https://5c3755177820ff0014d92711.mockapi.io/articles")
            .then(({ data }) => {
               doDispatch("FILTER_ARTICLES", data)
            });
      }
   }

   const openAddArticleModal = () => {
      doDispatch("OPENMODAL_ADDARTICLE");
   }

   return (
      <Navbar bg="light" variant="light" fixed="top" className="header">
         <Navbar.Brand href="#home">Articles redux</Navbar.Brand>
         <Form inline>
            <FormControl type="text"
               placeholder="Введите запрос.."
               className="mr-sm-2"
               value={inputValue}
               onChange={handleChangeInput}
               onKeyUp={(e) => handleClickSearch(e)} />
            <Button className="mr-sm-2" variant="outline-primary" onClick={handleClickSearch}>Поиск</Button>
            <Button variant="outline-success" onClick={() => openAddArticleModal()}>Добавь свою статью!</Button>
         </Form>
      </Navbar>
   )
};

export default Header;