const numberOfCategories = document.querySelector('ul#categories');


const categoryItems = numberOfCategories.querySelectorAll('li.item');
console.log("Number of categories:", categoryItems.length);


categoryItems.forEach(categoryItem => {

    const title = categoryItem.querySelector('h2');

    const totalCountElements = categoryItem.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${totalCountElements.length}`);
});



























// function countData(param) {
//     let count = 0;
//     param.forEach(node => { count++; });
//     return count;
// }

// const numberOfCategories = document.querySelectorAll("ul#categories")

// const totalCount = countData(numberOfCategories);


// console.log("Number of categories: ", totalCount.length);


// const hasTitle = document.querySelectorAll("h2")
// hasTitle.forEach(title => {
//     const totalCountElements = document.querySelectorAll('li');
//     console.log(`Category:  ${title.textContent}`);
//     console.log(`Elements : ${totalCountElements.length}`);



