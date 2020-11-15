import * as React from "react";
import { useEffect, useState } from "react";
import { useRouteMatch, Link, } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { gql, useMutation } from "@apollo/client";
import { Button } from "../../components/button";
import { IBook } from "../../../types/api";

enum FieldNames {
    author = "author",
    category = "category",
    description = "description",
    name = "name",
}

const initialValues: IBook = {
    author: "author",
    category: "category",
    description: "description",
    name: "name",
};

export const UpdateBook = () => {
    const { path, url } = useRouteMatch();

    const ADD_BOOK = gql`
        mutation createBook(
            $input: CreateBookInput!
        ) {
            createBook(
                input: $input
            ) {
                book {
                    name
                    description
                    author
                    category
                    createdAt
                }
            }
        }
    `;
    const [addBook, { data }] = useMutation(ADD_BOOK);

    const onSubmit = async (values: IBook) => {
        const { author, category, description, name } = values;

        await addBook({
            variables: { input: { author, category, description, name } },
        });
    };

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={initialValues}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name={FieldNames.name}>
                            {({ input, meta }) => (
                                <div>
                                    <label>本のタイトル</label>
                                    <input {...input} type="text" />
                                </div>
                            )}
                        </Field>
                        <Field name={FieldNames.author}>
                            {({ input, meta }) => (
                                <div>
                                    <label>著者</label>
                                    <input {...input} type="text" />
                                </div>
                            )}
                        </Field>
                        <Field name={FieldNames.category}>
                            {({ input, meta }) => (
                                <div>
                                    <label>ジャンル</label>
                                    <input {...input} type="text" />
                                </div>
                            )}
                        </Field>
                        <Field name={FieldNames.description}>
                            {({ input, meta }) => (
                                <div>
                                    <label>メモ</label>
                                    <input {...input} type="textarea" />
                                </div>
                            )}
                        </Field>
    
                        <div className="form-footer">
                            <Button type="submit" children="送信" />
                        </div>
                    </form>
                )}
            ></Form>
        </div>
    );
};
