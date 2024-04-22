// });
const numberOfCategories = document.querySelector('ul#categories');

// Пораховуємо кількість категорій (елементів li з класом "item") у списку
const categoryItems = numberOfCategories.querySelectorAll('li.item');
console.log("Number of categories:", categoryItems.length);

// Перебираємо кожну категорію
categoryItems.forEach(categoryItem => {
    // Знаходимо заголовок h2 в поточній категорії
    const title = categoryItem.querySelector('h2');
    // Знаходимо всі елементи li, вкладені у поточну категорію
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



