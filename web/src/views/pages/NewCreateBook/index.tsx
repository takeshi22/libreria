import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Field } from "react-final-form";
import { Button } from "../../components/button";
import { IBooks } from "../../../types/api";

enum FieldNames {
    author = "author",
    category = "category",
    description = "description",
    name = "name",
}

const initialValues: IBooks = {
  author: "author",
  category: "category",
  description: "description",
  name: "name",
}

export const NewCreateBook = () => {
    const onSubmit = async (value: IBooks) => {
        const books = value;
        axios
            .post("http://localhost:5555/books", { books })
            .then(() => {});
    };

    return (
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
    );
};
