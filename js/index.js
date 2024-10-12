// fetch data from API-----------------------------------------------------

const loadAllCategory = ()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(res => res.json())
    .then(data => displayAllCategory(data.categories))
}


// display all categories
const displayAllCategory = (categories)=>{
    const categoryContainer = document.getElementById("category-container");
    categories.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="category-${category.idCategory}" class="h-auto flex items-center gap-5 border-[1px] border-text-primary border-opacity-10 rounded-lg p-4">
                    <div class="w-1/2 h-full  flex justify-center items-center"><img class="w-full h-full object-cover" src="${category.strCategoryThumb}" alt=""></div>
                    <div class="w-1/2">
                        <h1 class="text-text-secondary text-xl sm:text-2xl font-bold mb-2">${category.strCategory}</h1>
                        <p class="text-text-tertiary text-sm sm:text-lg mb-3 h-28 overflow-y-scroll" style="-ms-overflow-style: none; scrollbar-width: none;">${category.strCategoryDescription}</p>
                        <a class="underline text-btn-primary text-sm lg:text-lg font-semibold" href="">View details</a>
                    </div>
                </div>
        `;
        categoryContainer.append(div);
    });
}




// {
//     "idCategory": "1",
//     "strCategory": "Beef",
//     "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
//     "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
//     },


// globally calling function
loadAllCategory();