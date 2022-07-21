
// // Your Code Here
    async function main() {
        let response = await fetch('http://localhost:3001/listBooks')
        let books = await response.json()
        books.forEach(listBook)
    }
    
    function listBook(book) {
        let root = document.querySelector('#root')
        // List of the books on the site
        let li = document.createElement('li')
        li.textContent = book.title + " = "
        // input field for the QTY of books availible
        let quantityInput = document.createElement('input')
        quantityInput.value = book.quantity
        // Admins save button to update the Book qty availible
        let saveButton = document.createElement('button')
        saveButton.textContent = 'Save'
        // Event Listener to actualy update the books 
        saveButton.addEventListener('click', () => {
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: quantityInput.value
                })
            })
        })    
        li.append(quantityInput, saveButton)    
        root.append(li)
    }
    
    main();