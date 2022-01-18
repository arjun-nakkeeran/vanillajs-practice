import {book} from './book.js';
import { technicalbook } from './technicalbook.js';

const testBook = () => {
    let book1 = new book('ff', 'Dan Brown', 12345, 10);
    console.log(book1.getAuthor());
    console.log(book1.availability);
    book1.sell();
    console.log(book1.availability);

    const dotnetbook = new technicalbook('Dotnet 6', 'Arjun', 123456, 100, 2020);
    console.log(dotnetbook);
    console.log(dotnetbook.getEdition());
}

testBook();
