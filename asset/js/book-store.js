class Book {
    constructor() {
        this.pass = 't6hVRcARAVSPzB2bZu1vEAPEgneYXMr9';
    }

    // This gets the various book category
    async getBook(value = 'full-overview') {
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${value}.json?api-key=${this.pass}`)
            const result = await response.json()
            return {
                result
            }
        }
        // This gets the data of a book category for a given date 
        //entered paras = date and book-category
    async getStoredBook(date = '2021-10-02', value) {
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${date}/${value}.json?api-key=${this.pass}`)
            const result = await response.json()
            return {
                result
            }
        } // This gets the current data for a book category  
        //entered paras = book-category
    async getCurrent(value) {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${value}.json?api-key=t6hVRcARAVSPzB2bZu1vEAPEgneYXMr9`)

        const result = await response.json()
        return {
            result
        }
    }
}

// const book = new Book;
// book.getBook()
//     .then(res => {
//         let allBook = res.result.results.lists;
//         console.log(allBook);
//         // allBook.forEach((a, i) => {
//         //     console.log(a);
//         // });
//     })