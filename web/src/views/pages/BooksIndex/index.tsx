import * as React from "react";
import { BrowserRouter, Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IBooks } from "../../../types/api";

export const BookIndex = () => {
    const [bookData, setBookData] = useState<IBooks[]>([]);
    const { path, url } = useRouteMatch();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:5555/books");

            setBookData(result.data);
        };

        fetchData();
    }, []);

    return (
        <>
          <div>
            <Link to="/new">新規登録</Link>
            <Link to={`${url}`}>一覧</Link>
          </div>
          <table>
              <thead></thead>
              <tbody>
                  {bookData.map(({ name, favorite, author, category }, i) => (
                      <tr key={i}>
                          <td>{name}</td>
                          <td>{favorite}</td>
                          <td>{author}</td>
                          <td>{category}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
        </>
    );
};
