//alert("oi");

window.onload = function() {
  if (typeof (Storage) !== "undefined") {
    let views = Number(localStorage.getItem("colorBack"));//"btnColor"));
    if (views) {
        views = views +1;
        localStorage.setItem("colorBack"/*"btnColor"*/,views);
    } else {
        localStorage.setItem("colorBack"/*"btnColor"*/,1);
    }
    let txtBtn = document.querySelector("btnColor");//"#colorBack");
    let btn = document.querySelector("#btnColor");
    txtBtn.innerHTML = `oi:${localStorage.views}`;
  } else {
    console.log("Sem suporte para Web Storgage");
  }
};
