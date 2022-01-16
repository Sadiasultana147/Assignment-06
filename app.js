//  search button handle
const searchBook =()=> {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    searchField.value= '';
    const booklist = document.getElementById('searchResult');
    booklist.textContent= ''
 
    if(searchText===''){
  
        const searchTotal = document.getElementById('search-total');
        searchTotal.innerText = `Total Number of Search Result:: `;
    
     const errorMessage = document.createElement('h1');
     
     errorMessage.innerText = "Empty text not accepted";
    
     booklist.appendChild(errorMessage);
 
    }
    else{
         // dynamic data /url fetch
    
     const url =`https://openlibrary.org/search.json?q=${searchText}`
     //    console.log(url)
     fetch(url)
     .then(res=> res.json())
     .then(data=>displayBook(data.docs , data.numFound));
 
    }
 
   
}

// display result on web site
const displayBook = (data , numFound)=>{
    //  console.log(data)
    const resultCount = numFound;
 
     const booklist = document.getElementById('searchResult');
      booklist.textContent= ''
     const errorMessage = document.createElement('h1');
     if(data.length===0  ){
      
      const searchTotal = document.getElementById('search-total');
      searchTotal.innerText = `Total Number of Search Result:: `;
  
         errorMessage.innerText = "Sorry! this book is not available";
  
         booklist.appendChild(errorMessage);
     }
     
        
 
       else{

        const searchTotal = document.getElementById('search-total');
        searchTotal.innerText = `Total Number of Search Result:: ${resultCount}`;
        
        
         data.forEach( book=>{
             
             const coverID = book.cover_i;
             const url =`  https://covers.openlibrary.org/b/id/${coverID}-M.jpg`
             
            //  console.log(book)
 
             const div = document.createElement('div');
             div.classList.add('col')
             div.style.fontWeight ='bold'
             if(book.cover_i===undefined){
                
                 div.innerHTML =`
                
                 <div >
                 <img width="150px" src="images/no-image-icon-23.jpg" alt="...">
                 <div  class="card-body">
                     <h5 class="card-title">Titel: ${book.title}</h5>
                     <p class="card-text">Author: ${book.author_name ? book.author_name[0] : 'No Info Available'}</p>
                     <p class="card-text">Publisher: ${book.publisher ? book.publisher[0] : 'No Info Available'}</p>
                     <p class="card-text">First Publish: ${book.first_publish_year}</p>

                 </div>
     </div>
                 
              
           
             `
             booklist.appendChild(div)
                 
             }
             else{
               
                 div.innerHTML =`
                
                 <div >
                            <img width="150px" src=${url} alt="...">
                            <div class ="card-body"  >
                                <h5 class="card-title">Titel: ${book.title}</h5>
                                <p class="card-text">Author: ${book.author_name ? book.author_name[0] : 'No Info Available'}</p>
                                <p class="card-text">Publisher: ${book.publisher ? book.publisher[0] : 'No Info Available'}</p>
                                <p class="card-text">First Publish: ${book.first_publish_year}</p>

                            </div>
                </div>
              
            
           
             `
             booklist.appendChild(div)
            }
             
        })
    }
 
}
 
    
  
   
  
  
    
        
 