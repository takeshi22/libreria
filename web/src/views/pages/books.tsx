import * as React from "react";
import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import axios from "axios";
import { IBooks } from "../../types/api"

export const BookIndex = () => {
  const [bookData, setBookData] = useState<IBooks[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5555/books");

      setBookData(result.data);
    }

    fetchData();
  }, []);

  return(
    <table>
      <thead></thead>
      <tbody>
        {bookData.map(({ name, favorite, author, category }, i) => <tr key={i}>
          <td>{name}</td>
          <td>{favorite}</td>
          <td>{author}</td>
          <td>{category}</td>
        </tr>)}
      </tbody>
    </table>
  )
}