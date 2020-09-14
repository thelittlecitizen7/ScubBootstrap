var allPrice = [
    {
        id : "1",
        startPrice : 0,
        endPrice : 500
    },
    {
        id : "2",
        startPrice : 500,
        endPrice : 1000
    },
    {
        id : "3",
        startPrice : 1000,
        endPrice : 1500
    },
    {
        id : "4",
        startPrice : 1500,
        endPrice : 2000
    },
    {
        id : "5",
        startPrice : 2000,
        endPrice : null
    }
]


let fluteInstrument = [
    {
        description : "חליל יפה",
        id : 4,
        imagePath : "imgs/Clarinet.jpg",
        instrumentType: {id: 1, name:"exhalation"},
        name:" חליל",
        price: 50,
        typeID: 1
    },
    {
        description : "מפוחית",
        id : 4,
        imagePath : "imgs/harmonica.jpg",
        instrumentType: {id: 1, name:"exhalation"},
        name:"מפוחית",
        price:35,
        typeID: 1
    },
    {
        description : "חצוצרה יפה",
        id : 4,
        imagePath : "imgs/trumpet.jpg",
        instrumentType: {id: 1, name:"exhalation"},
        name:" חצצורה",
        price:1500 ,
        typeID: 1
    },
    {
        description : "תופים טובים",
        id : 4,
        imagePath : "imgs/tupim.jpg",
        instrumentType: {id: 3, name: "knock"},
        name:"תופים" ,
        price:2000 ,
        typeID: 3
    },
    
    {
        description : "קלרינט רועש",
        id : 4,
        imagePath : "imgs/Clarinet.jpg",
        instrumentType: {id: 1, name: "exhalation"},
        name:"קלרינט",
        price:1400 ,
        typeID: 1
    },
    {
        description : "טרומבון קטן",
        id : 4,
        imagePath : "imgs/trombon.jpg",
        instrumentType: {id: 1, name: "exhalation"},
        name:"טרומבון",
        price:2400 ,
        typeID: 1
    },
    {
        description : "טרומבון קטן",
        id : 4,
        imagePath : "imgs/trombon.jpg",
        instrumentType: {id: 1, name: "exhalation"},
        name:"טרומבון",
        price:2400 ,
        typeID: 1
    },
    {
        description : "טרומבון קטן",
        id : 4,
        imagePath : "imgs/trombon.jpg",
        instrumentType: {id: 1, name: "exhalation"},
        name:"טרומבון",
        price:2400 ,
        typeID: 1
    },
    {
        description : "טרומבון קטן",
        id : 4,
        imagePath : "imgs/trombon.jpg",
        instrumentType: {id: 1, name: "exhalation"},
        name:"טרומבון",
        price:2400 ,
        typeID: 1
    }
];

previosFilter = [];
previosFilter = fluteInstrument;


function updatePreviosProducts(products){
    previosFilter = products;
}


window.onload = function() {
    renderProductsToScreen2(fluteInstrument);
 };

function renderProductsToScreen2(products){
    updatePreviosProducts(products);
    var containerProductsDiv = document.getElementById("AllProducts");
    var htmlDiv = "<div class='row justify-content-center'>";
    products.forEach((product) => {
        htmlDiv += getHtmlProduct(product);
    });
    htmlDiv += "</div>"
    containerProductsDiv.innerHTML = htmlDiv;
        
}


function getHtmlProduct(product)
{
    var htmlDiv = ""
    htmlDiv += "<div class='col-md-4  text-center w-200'>"
    htmlDiv += "<div class='card h-100'>"
    htmlDiv += "<div class='card-body'>"
    htmlDiv += "<img src="+product.imagePath+">"
    htmlDiv += "<h1>"+product.name+"</h1>"
    htmlDiv += "<p>"+product.description+"</p>"
    htmlDiv += "<p>"+product.price+" ₪ </p>"
    htmlDiv += "<button class='glyphicon glyphicon-shopping-cart' type='button'>הוספה לסל</button>"
    htmlDiv += "</div>"
    htmlDiv += "</div>"
    htmlDiv += "</div>"
    return htmlDiv;
}
// filters

function getAllProductsByType(){
    var e = document.getElementById("kindMusicalInstrumentsId");
    var typeMusic = e.options[e.selectedIndex].value;
    if (typeMusic == "all"){
        renderProductsToScreen2(fluteInstrument);
        return;
    }
    var allProductOfTypeSelect = fluteInstrument.filter((product) => {
        if (product.instrumentType.name == typeMusic){
            return product;
        }
    })
    renderProductsToScreen2(allProductOfTypeSelect);
}



function searchProduct(){
    
    var inputSearch = document.getElementById("kindMusicalInstrumentsSearch");
    var userInput = inputSearch.value;
     console.log(userInput);

    if (userInput == ""){
        filterAll();
    }

    var allProductFounded = previosFilter.filter((product) => {
        if (product.name.includes(userInput)){
            return product;
        }
    });
    renderProductsToScreen2(allProductFounded)
}

function getPiceTypeById(priceId){
    return allPrice.filter((price) => {
        if (price.id == priceId){
            return price;
        }
    })[0];
}

function filterByPrice(){
    var checkbox1 = document.getElementById("checkbox1");
    var checkbox2 = document.getElementById("checkbox2");
    var checkbox3 = document.getElementById("checkbox3");
    var checkbox4 = document.getElementById("checkbox4");
    var checkbox5 = document.getElementById("checkbox5");
    
    ls = []
    var isSomeone = false;
    if (checkbox1.checked){
        
        isSomeone = true
        var priceTypeData = getPiceTypeById(checkbox1.value);
        ls = ls.concat(getAllProductByPrice(priceTypeData))
    }
    if (checkbox2.checked){
        isSomeone = true
        
        var priceTypeData = getPiceTypeById(checkbox2.value);
        ls = ls.concat(getAllProductByPrice(priceTypeData))
    }
    if (checkbox3.checked){
        isSomeone = true
        var priceTypeData = getPiceTypeById(checkbox3.value);
        ls = ls.concat(getAllProductByPrice(priceTypeData))
    }
    if (checkbox4.checked){
        isSomeone = true
        
        var priceTypeData = getPiceTypeById(checkbox4.value);
        ls = ls.concat(getAllProductByPrice(priceTypeData))
    }
    if (checkbox5.checked){
        isSomeone = true
        var priceTypeData = getPiceTypeById(checkbox5.value);
        ls = ls.concat(getAllProductByPrice(priceTypeData))
    }
    if (!isSomeone){
        ls =  fluteInstrument;
        getAllProductsByType();
        return;
    }
    renderProductsToScreen2(ls);
}


function getAllProductByPrice(priceTypeData){
    return fluteInstrument.filter((product) => {
        if (priceTypeData.endPrice == null){
            if (product.price >= priceTypeData.startPrice){
                return product;
            }        
        }
        if (product.price >= priceTypeData.startPrice && product.price <= priceTypeData.endPrice ){
            return product;
        }
    });
}

function filterAll(){
    getAllProductsByType();
    filterByPrice();
}




