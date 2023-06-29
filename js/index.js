document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => {
        books.forEach(book => settingBooks(book));
    })

    function settingBooks(book) {
        const list = document.createElement('li')
        list.innerHTML = `<p>${book.title}</p>`
        list.addEventListener('click', () => showInfo(book))
        document.querySelector('#list').appendChild(list)
    }

    const users = `${books.users}`;
    const username = users.map(user => `${user.username}`)
    console.log(username)

    function showInfo(book) {
        const pack = document.createElement('div')
        pack.innerHTML= `
        <p>${book.id}</P>
        <img src="${book.img_url}"/>
        <p>${book.author}</P>
        <p>${book.subtitle}</P>
        <p>${book.description}</P>
        <p>${book.users}</P>
        <button>like</button>
        `
        document.querySelector('#show-panel').appendChild(pack)
    }
});
