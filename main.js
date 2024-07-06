//create header section

let header = document.createElement("header");
let header_title = document.createElement("span");
let header_menu = document.createElement("ul");
let header_menu_li1 = document.createElement("li");
let header_menu_li2 = document.createElement("li");
let header_menu_li3 = document.createElement("li");
let header_menu_li4 = document.createElement("li");

let header_title_text = document.createTextNode("Elzero");
let header_menu_li1_text = document.createTextNode("Home");
let header_menu_li2_text = document.createTextNode("About");
let header_menu_li3_text = document.createTextNode("Services");
let header_menu_li4_text = document.createTextNode("Context");

header_title.appendChild(header_title_text);
header_menu_li1.appendChild(header_menu_li1_text);
header_menu_li2.appendChild(header_menu_li2_text);
header_menu_li3.appendChild(header_menu_li3_text);
header_menu_li4.appendChild(header_menu_li4_text);

header_menu.appendChild(header_menu_li1);
header_menu.appendChild(header_menu_li2);
header_menu.appendChild(header_menu_li3);
header_menu.appendChild(header_menu_li4);

header_menu.style.cssText =
  "list-style:none; display:flex; justify-content:space-between; gap:7px;color:#777;";
header_title.style.cssText =
  "color: green; font-weight:bold; font-family:arial;font-size:18px;";
header.appendChild(header_title);
header.appendChild(header_menu);

header.className = "header";
header_title.className = "header-title";
header_menu.className = "header-menu";

header.style.cssText =
  "display: flex; justify-content: space-between; align-items: center;";


//create content section
let content = document.createElement("section");
content.style.cssText =
  "display:grid; gap:10px; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); background-color:lightgrey;padding: 5px;";

for (let i = 0; i < 15; i++) {
  let product_box = document.createElement("div");
  let product_num = document.createElement("span");
  let product_title = document.createElement("p");
  let product_num_text = document.createTextNode(`${i + 1}`);
  let product_title_text = document.createTextNode("Product");

  product_num.appendChild(product_num_text);
  product_num.className = "product-num";
  product_title.appendChild(product_title_text);
  product_title.className = "product-title";

  product_num.style.cssText =
    "font-family: arial; font-weight: bold; font-size: 15px; padding:0;margin:0px;";
  product_title.style.cssText =
    "font-family: arial; font-size:10px; color: #777; padding:0; margin:0;";

  product_box.appendChild(product_num);
  product_box.appendChild(product_title);
  product_box.className = "product";
  content.appendChild(product_box);

  product_box.style.cssText =
    "background-color: white; color: black; display:flex; flex-direction:column;align-items: center; padding:8px 55px;";
}


//footer section

let footer = document.createElement("div"); 
let footer_text = document.createTextNode("Copyright 2021"); 
footer.appendChild(footer_text); 
footer.style.cssText = "text-align: center; padding-top:5px; width:100%; height: 30px;background-color: green; color:white; font-family:arial;"; 


document.body.appendChild(header);
document.body.appendChild(content);
document.body.append(footer); 
