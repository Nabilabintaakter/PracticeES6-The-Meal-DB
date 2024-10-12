// fetch data from API-----------------------------------------------------
// load category names
const loadAllCategory = ()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then(res => res.json())
    .then(data => displayAllCategory(data.categories))
}
// load category wise data
const loadCategoryDetails = (categoryName)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
    .then(res => res.json())
    .then(data => displayCategoryDetails(data.meals))
}

// display all categories by default
const displayAllCategory = (categories)=>{
    const categoryContainer = document.getElementById("category-container");
    categories.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="category-${category.idCategory}" class="h-auto flex flex-col sm:flex-row items-center gap-5  rounded-lg p-4 shadow-xl">
                    <div class="w-full sm:w-1/2 h-full  flex justify-center items-center"><img class="w-full h-full object-cover" src="${category.strCategoryThumb}" alt=""></div>
                    <div class="w-full sm:w-1/2">
                        <h1 class="text-text-secondary text-xl sm:text-2xl font-bold mb-2">${category.strCategory}</h1>
                        <p class="text-text-tertiary text-base sm:text-lg mb-4 h-[96px] sm:h-[105px] md:h-28 overflow-y-scroll" style="-ms-overflow-style: none; scrollbar-width: none;">${category.strCategoryDescription}</p>
                        <p onclick="loadCategoryDetails('${category.strCategory}')" class="underline text-btn-primary text-base lg:text-lg font-semibold cursor-pointer">View details</p>
                    </div>
                </div>
        `;
        categoryContainer.append(div);
    });
}
// display all categories 
const displayCategoryDetails = ()=>{

}



// {
//     "idCategory": "1",
//     "strCategory": "Beef",
//     "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
//     "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
//     },


// globally calling function
loadAllCategory();