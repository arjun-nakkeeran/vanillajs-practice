import {book} from './book.js'

export class technicalbook extends book {

    constructor(title, author, isbn, stock, edition) {

        super(title, author, isbn, stock);
        this.edition = edition;

    }

    getEdition = () => `The edition of book ${this.title} is ${this.edition}`;
    
}

