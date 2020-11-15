import { useEffect, useState } from "react";
import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { IBook } from "../../../types/api";

interface IProps {
    id: number;
}

export const ShowDetail = () => {
    const { id } = useParams() as any;

    const GET_BOOK = gql`
        query GetBook($id: ID!) {
            book(id: $id) {
                name
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id },
    });

    return <div>{!loading && <h2>本のタイトル：{data.book.name}</h2>}</div>;
};
