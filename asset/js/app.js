// calling all classes
const store = new Book
const ui = new UI

const container = document.querySelector('.containeR')
const showAllCat = document.querySelector('.show-all-cat');
const showMenu = document.querySelector('.menu-icon');
const hideMenu = document.querySelector('.close-icon');
const aside = document.querySelector('aside')

// Event Listners
showAllCat.addEventListener('click', showCat);
showMenu.addEventListener('click', showMenuBar)
hideMenu.addEventListener('click', hideMenuBar)

//Getting desired book categories
function getBookCat() {
    store.getBook()
        .then(res => {
            let allBook = res.result.results.lists;
            for (let i = 0; i < allBook.length; i++) {

                switch (i) {
                    case 2:
                        showBestSeller(i, res.result.results.lists[i].books)
                        showBestBooks(i, allBook[i].list_name)
                        showAllBookData(i, allBook[i].books)
                        showNewIn(i, res.result.results)
                        continue;
                    case 3:
                        showBestSeller(i, res.result.results.lists[i].books)
                        showBestBooks(i, allBook[i].list_name)
                        showAllBookData(i, allBook[i].books)
                        showNewIn(i, res.result.results)
                        continue;
                    case 5:
                        showBestSeller(i, res.result.results.lists[i].books)
                        showBestBooks(i, allBook[i].list_name)
                        showAllBookData(i, allBook[i].books)
                        showNewIn(i, res.result.results)
                        continue;
                    case 7:
                        showBestSeller(i, res.result.results.lists[i].books)
                        showBestBooks(i, allBook[i].list_name)
                        showAllBookData(i, allBook[i].books)
                        showNewIn(i, res.result.results)
                        continue;
                    case 13:
                        showBestSeller(i, res.result.results.lists[i].books)
                        showBestBooks(i, allBook[i].list_name)
                        showAllBookData(i, allBook[i].books)
                        showNewIn(i, res.result.results)
                        break;
                }
                // showBestSeller(i, res.result.results.lists)
            }

        })

}
getBookCat()

// Showing BEST BOOKS SLIDE
function showBestBooks(index, data) {
    // console.log('category', data);
    store.getStoredBook('2021-10-02', data)
        .then(res => {
            let allB = res.result.results.books;
            allB.forEach((a, i) => {
                ui.showBestBook(a)
            });
        })
}
// showBestBooks()

// Showing new in's from various categories
function showNewIn(index, data) {
    store.getCurrent(data.lists[index].list_name_encoded)
        .then(res => {
            let allBook = res.result.results.books
            for (let i = 0; i < 5; i++) {
                // console.log('yes', i, ':', allBook[i]);
                ui.showNewIn(allBook[i]);
            }

        })


}
showNewIn()

function showAllBookData(index, data) {
    switch (index) {
        case 2:
            data.forEach((a, i) => {
                ui.showAllBookData_1(a);
            });
        case 3:
            data.forEach((a, i) => {
                // console.log(i, ":", a.title, a.author);
                ui.showAllBookData_2(a)
            })
        case 5:
            data.forEach((a, i) => {

                ui.showAllBookData_5(a)
            })
        case 7:
            data.forEach((a, i) => {

                ui.showAllBookData_3(a)
            })
        case 13:
            data.forEach((a, i) => {

                ui.showAllBookData_4(a)
            })
            break;
    }
}
showAllBookData()

function showBestSeller(index, data) {
    // console.log(index, data);

    for (let i = 0; i < 3; i++) {
        ui.showBestSeller(data[i])
    }


}

function showCat(e) {
    ui.showAllBooks()
    e.preventDefault()
}

function showMenuBar(e) {
    aside.classList.remove('aside-inactive')
    container.style = 'filter: grayscale(.85)'

    setTimeout(() => {
        aside.classList.toggle('aside-active')
        aside.style = 'filter: grayscale(0);'
    }, 100);
    showMenu.classList.toggle('menu-icon-active')

    setTimeout(() => {
        showMenu.style = 'display: none'
        showMenu.classList.remove('menu-icon-active')
        hideMenu.style = 'display: block'
    }, 201);
    e.preventDefault()
}

function hideMenuBar(e) {
    aside.classList.remove('aside-active')
    setTimeout(() => {
        aside.classList.toggle('aside-inactive')
        container.style = 'filter: grayscale(0);'

    }, 100);
    hideMenu.classList.toggle('close-icon-active')
    setTimeout(() => {
        hideMenu.style = 'display: none'
        hideMenu.classList.remove('close-icon-active')

        showMenu.style = 'display: block'
    }, 201);
    e.preventDefault()

    e.preventDefault()
}