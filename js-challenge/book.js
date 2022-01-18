
export class book
{
    constructor (title, author, isbn, stock) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.stock = stock;
    }
    
    // get title() {
    //     return this.title;
    // };
    // get Isbn() {this.isbn};
    getAuthor = () => this.author;

    get availability() {
        if (this.stock <= 0)
        {
            return 'Out of Stock';
        }
        else if (this.stock < 10)
        {
            return 'Low in Stock';
        }
        else
        {
            return 'In Stock';
        }
    }

    sell = (quantity = 1) => {
        
        this.stock -= quantity;
    }

    restock = (quantity) => {
        this.stock += quantity;
    }
}
