// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import productsList from "./products.json" with { type: "json" };

export function productsListComponent() {
  const section = document.createElement("section");
  section.style.border = "solid 1px #ccc";
  section.style.padding = "10px";
  
  const productosOrdenados = getProductSortedByPrice(productsList);
  const list = document.createElement("ul");
  
  productosOrdenados.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.title} - $${product.price}`;
    list.appendChild(listItem);
  });
  
  section.appendChild(list);

  return section;
}

function getProductSortedByPrice(products) {
  return products.sort((a, b) => a.price - b.price);
}