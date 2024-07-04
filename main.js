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

document.body.appendChild(header);

//create content section

let content = document.createElement("section");
