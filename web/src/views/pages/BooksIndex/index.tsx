import { useEffect, useState } from "react";
import * as React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { IBook } from "../../../types/api";
import { UpdateBook } from "../UpdateBook";

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

    const rederTable = () => {
        return(
            <table>
                <thead></thead>
                <tbody>
                    {!loading && data.books.map(({ name, favorite, author, category }, i) => (
                        <tr key={i}>
                            <td>{name}</td>
                            <td>{favorite}</td>
                            <td>{author}</td>
                            <td>{category}</td>
                            <td>
                                <button>編集</button>
                                <button>削除</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    return (
        <>
            <div>
                <Link to={`${url}`}>一覧</Link>
                <Link to={`${url}/new`}>新規追加</Link>
            </div>

            <Switch>
                <Route exact path={url}>
                    {rederTable()}
                </Route>
                <Route path={`${url}/new`}>
                    <UpdateBook />
                </Route>
            </Switch>
        </>
    );
};
