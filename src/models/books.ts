import {Schema, Types, model, Model} from "mongoose";
import { Book } from "../interfaces/books.interface";

const BookSchema = new Schema<Book>(
    {
        title: {
            type: String,
            required: true,
          },
          author: {
            type: String,
            required: true,
          },
          genre: {
            type: String,
            required: true,
            },
          isbn: {
            type: String,
            unique: true,
          },
          publicationYear: {
            type: Number
          },
          synopsis: {
            type: String,
            maxlength: 400,
          },
          numberOfPages: {
            type: Number
          },
          imageURL: {
            type: String,
            required: true
          },
          user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
          }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const BookModel = model("books", BookSchema);

export default BookModel;