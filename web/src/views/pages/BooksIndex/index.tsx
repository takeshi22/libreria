import { useEffect, useState } from "react";
import * as React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { IBook } from "../../../types/api";

export const BookIndex = () => {
    const [bookData, setBookData] = useState<IBook[]>([]);
    const { path, url } = useRouteMatch();

    const { loading, error, data } = useQuery(gql`
        query getBooks {
            books {
                name
                author
            }
        }
    `);

    return (
        <>
            <div>
                <Link to="/new">新規登録</Link>
                <Link to={`${url}`}>一覧</Link>
            </div>
            <table>
                <thead></thead>
                <tbody>
                    {!loading && data.books.map(({ name, favorite, author, category }, i) => (
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
