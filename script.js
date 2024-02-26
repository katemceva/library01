



fetch("books.json")
.then(function(response) {
    return response.json();
})

.then(function(books){
    let placeholder = document.querySelector("#data-output");
    let out = " ";
    for(let book of books){
        out +=`
        <tr> 
        <td><img src='${book.image}'> </td>  
        <td>${book.title} </td>
        <td>${book.author} </td>
        <td>${book.age} </td>
        <td>${book.publisher} </td>
        <td>${book.year} </td>
            
        </tr>
       
        `;
    }

    placeholder.innerHTML = out;
})