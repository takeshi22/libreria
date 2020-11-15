import { useEffect, useState } from "react";
import * as React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { IBook } from "../../../types/api";
import { UpdateBook } from "../UpdateBook";
import { ShowDetail } from "../Books/bookDetail";

export const BookIndex = () => {
    const [bookData, setBookData] = useState<IBook[]>([]);
    const { path, url } = useRouteMatch();

    const { loading, error, data } = useQuery(gql`
        query getBooks {
            books {
                id
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
                    {!loading && data.books.map(({ id, name, favorite, author, category }, i) => (
                        <tr key={i}>
                            <td><Link to={`${url}/${id}`}>{name}</Link></td>
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
                <Route exact path={`${url}/new`}>
                    <UpdateBook />
                </Route>
                <Route path={`${path}/:id`}>
                    <ShowDetail />
                </Route>
            </Switch>
        </>
    );
};
