import React, { useState } from "react";
import Axios from 'axios';
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Alert from "./components/Alert";
import Recipe from "./components/recipe";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const id = "d66a34e3";
  const key = "3528fe5d0cbce80d41d32d7348577f12";
  const url =`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}&from=0&to=3&calories=591-722&health=alcohol-free`;
  const getData = async () => {
    if (query !== " ") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      console.log("please fil the form");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="APP">
      <h1>Food searching app</h1>
      <form onSubmit={onSubmit} className="search-form">
        {alert !== "" && <Alert alert={alert} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}
export default App;
