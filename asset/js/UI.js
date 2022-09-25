class UI {
    constructor() {
            this.allBooks = document.querySelector('.all-book');
            this.getStartedBlock = document.querySelector('.get-started');


        }
        // Funtion to show BEST BOOK
    showBestBook(data) {
            const bestBookHolder = document.querySelector('.best-book-holder')
            bestBookHolder.innerHTML += `
        <div class="swiper-slide slide ">
            <div class="best-book-info">
                <div class="top-book-info">
                    <img src="${data.book_image}" alt="">;
                </div>
                <div class="main-book-info">
                    <h4 class="full-black">${data.title}</h4>
                    <small>${data.author}</small>
                    <div class="book-cost">
                        <h5 class="full-black">${data.price}</h5>
                        <smallest></smallest>
                    </div>
                    <button class="round-end button-bg-3">
                        Add to cart
                    </button>
                    <div class="star">
                        <i class="fas fa-star star-icon"></i>
                        <h5 class="full-black">4.9</h5>
                    </div>
                </div>
            </div>
        </div>`
        }
        // --------------------------END OF BEST BOOKS---------------------------
        //----------------------------DISPLAYING NEW IN-----------------------------

    showNewIn(data) {
            const showNew = document.querySelector('.new-in-func')
            showNew.innerHTML += `
         <div class="swiper-slide">
            <div class="book">
                <div class="book-img">
                    <img src="${data.book_image}" alt="">
                </div>
                <div class="book-info">
                    <div class="review">
                        <i class="fas fa-star star"></i>
                        <h5 class="full-black">4.7</h5>
                    </div>
                    <h4 class="full-black">${data.title}</h4>
                    <small>${data.author}</small>
                    <button class="round-end button-bg-2">
                        Pre order
                    </button>
                </div>
            </div>
        </div>
        `
        }
        // ------------------------END OF DISPLAYING NEW IN------------------------------
    showAllBooks() {
            this.getStartedBlock.style = 'display: none;'
            this.allBooks.style = `visibility: visible; height: auto;`
        }
        //-------------------------All categories series----------------------------------
    showAllBookData_1(data) {
        const firstCat = document.querySelector('.first-cat')
        firstCat.innerHTML += `
         <div class="book">
            <div class="book-cont">
                <div class="book-img">
                    <img src="${data.book_image}" alt="">
                </div>
                <div class="book-info">
                    <div class="review">
                        <i class="fas fa-star star"></i>
                        <h5 class="full-black">4.7</h5>
                    </div>
                    <h4 class="full-black">${data.title}</h4>
                    <small>${data.author}</small>
                    <button class="round-end button-bg-2">
                        Bookmark
                    </button>
                </div>
            </div>
        </div>`
    }
    showAllBookData_2(data) {
        const firstCat = document.querySelector('.second-cat')
        firstCat.innerHTML += `
         <div class="book">
            <div class="book-cont">
                <div class="book-img">
                    <img src="${data.book_image}" alt="">
                </div>
                <div class="book-info">
                    <div class="review">
                        <i class="fas fa-star star"></i>
                        <h5 class="full-black">4.7</h5>
                    </div>
                    <h4 class="full-black">${data.title}</h4>
                    <small>${data.author}</small>
                    <button class="round-end button-bg-2">
                        Bookmark
                    </button>
                </div>
            </div>
        </div>`
    }
    showAllBookData_3(data) {
        const firstCat = document.querySelector('.third-cat')
        firstCat.innerHTML += `
         <div class="book">
            <div class="book-cont">
                <div class="book-img">
                    <img src="${data.book_image}" alt="">
                </div>
                <div class="book-info">
                    <div class="review">
                        <i class="fas fa-star star"></i>
                        <h5 class="full-black">4.7</h5>
                    </div>
                    <h4 class="full-black">${data.title}</h4>
                    <small>${data.author}</small>
                    <button class="round-end button-bg-2">
                        Bookmark
                    </button>
                </div>
            </div>
        </div>`
    }
    showAllBookData_4(data) {
        const firstCat = document.querySelector('.fourth-cat')
        firstCat.innerHTML += `
         <div class="book">
            <div class="book-cont">
                <div class="book-img">
                    <img src="${data.book_image}" alt="">
                </div>
                <div class="book-info">
                    <div class="review">
                        <i class="fas fa-star star"></i>
                        <h5 class="full-black">4.7</h5>
                    </div>
                    <h4 class="full-black">${data.title}</h4>
                    <small>${data.author}</small>
                    <button class="round-end button-bg-2">
                        Bookmark
                    </button>
                </div>
            </div>
        </div>`
    }
    showAllBookData_5(data) {
            const firstCat = document.querySelector('.fifth-cat')
            firstCat.innerHTML += `
         <div class="book">
            <div class="book-cont">
                <div class="book-img">
                    <img src="${data.book_image}" alt="">
                </div>
                <div class="book-info">
                    <div class="review">
                        <i class="fas fa-star star"></i>
                        <h5 class="full-black">4.7</h5>
                    </div>
                    <h4 class="full-black">${data.title}</h4>
                    <small>${data.author}</small>
                    <button class="round-end button-bg-2">
                        Bookmark
                    </button>
                </div>
            </div>
        </div>`
        }
        //  -----------------END OF ALL BOOKS----------------

    showBestSeller(data) {

            let seller = document.querySelector('.show-best-seller')
            seller.innerHTML += `
        <div class="swiper-slide slide">
        <div class="best-book-info">
            <div class="top-book-info">
                <img src="${data.book_image}" alt="">
            </div>
            <div class="main-book-info">
                <h4 class="full-black">${data.title}</h4>
                <small>${data.author}</small>
                <div class="book-cost">
                    <h5 class="full-black">${data.price}</h5>
                    <smallest>${data.price}</smallest>
                </div>
                <button class="round-end button-bg-3">
                Bookmark
            </button>
                <div class="star">
                    <i class="fas fa-star star"></i>
                    <h5 class="full-black">4.9</h5>
                </div>
            </div>
        </div>
    </div>`
        }
        // --------------------------END OF SHOW BEST SELLER------------------------------
}