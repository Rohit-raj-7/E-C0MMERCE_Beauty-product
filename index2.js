
// 
const header = document.createElement("div");
header.style.display = "flex";
header.style.flexWrap ="wrap";

header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.flexDirection = "row";

document.body.append(header);
async function fetchData() {
    try {

        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json();
        responsedata = data.products;

        responsedata.forEach((element) => {
            const productCard = document.createElement("div");
            document.body.append(productCard);
            productCard.style.fontSize = "16px";
            productCard.style.margin = "19px 100px";
            productCard.style.padding = "20px";
            productCard.style.width = "20vw";
            productCard.style.height = "auto";
            productCard.style.border = "3px solid black";
            productCard.style.backgroundColor = "silver";
         

            const titleDiv = document.createElement("div");
            titleDiv.innerText = element.title;
            titleDiv.style.fontWeight = "bolder";

            const descriptionDiv = document.createElement("div");
            descriptionDiv.innerText = element.description;
            descriptionDiv.style.marginTop = "10px";

            // Image
            if (element.images && element.images.length > 0) {
                const image = document.createElement("img");
                image.src = element.images[0]; 
                console.log(element.images[0])
                image.style.width = "100%";
                image.style.height = "auto";
                image.style.marginTop = "10px";
                productCard.appendChild(image); 
            }
            productCard.appendChild(titleDiv);
            productCard.appendChild(descriptionDiv);
            header.appendChild(productCard);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
fetchData();