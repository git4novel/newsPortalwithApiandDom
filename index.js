const fetchCategories = () => {
   fetch('https://openapi.programming-hero.com/api/news/categories')
   .then(res => res.json())
   .then((data) => showCategories(data.data))
}
const showCategories= data => {

    // console.log(data.news_category[0].category_name);
    // console.log(data);
    const categoriesContainer = document.getElementById('category-container');
    data.news_category.forEach(singleCategory=> {
        //step 1
        categoriesContainer.innerHTML += `<a class="nav-link" href="#" onclick="fetchCategoryNews('${singleCategory?.category_id}', '${singleCategory?.category_name}')" >${singleCategory?.category_name}</a>` ;
        
        //step 2
        /* let linkContainer = document.createElement('p');
        linkContainer.innerHTML =`<a class="nav-link active" aria-current="page" href="#">${singleCategory.category_name}</a>`
        categoriesContainer.appendChild(linkContainer);
        */
    })
}

//fetch all newses available in a category
const fetchCategoryNews = (categoryId, category_name)=> {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId} `
    fetch(url).then(res => res.json()).then(data=> showAllNews(data, category_name));
}

const element = document.getElementById('alert-section');

const showAllNews = (data, category_name)=> {
    
    element.classList.remove('d-none')
    
    document.getElementById('news-count').innerText = data.data.length;
    document.getElementById('category-name').innerText = category_name;
}


// fetchCategories(); made it onload