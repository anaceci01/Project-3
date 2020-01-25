const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: { type: String },
    date: { type: Date, default: Date.now },
    isbn: { type: String, required: true},
    description: { type: String},
    published_date: { type: Date},
    publisher: { type: String},
    updated_date: { type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
