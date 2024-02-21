let form = document.querySelector('.form4')
let booktable = document.getElementById('bkBtn')
let close = document.getElementById("close")
let button = document.getElementById('bkBtn1')
booktable.addEventListener("click",()=>{
    form.style.display='block'
    // console.log("ghjmk")
})
button.addEventListener("click",()=>{
    form.style.display='block'
    // console.log("ghjmk")
})
close.addEventListener("click",()=>{ 
    form.style.display = 'none'
})

let popup=document.getElementById('popup')
function CloseSlide(){
    popup.classList.remove("open-slide")
}

//-----------------------------------//

let starter = document.getElementById("starterf");
let saladf = document.getElementById("mealsf");
let mainf = document.getElementById("friesf");
let dessertf = document.getElementById("icecreamf");
// let icef = document.getElementById("icef");
let drinkf = document.getElementById("drinkf");
let animi = document.querySelectorAll(".menu-item1");

let navbar = document.querySelector(".navbar")
let navlink = document.querySelectorAll(".navbar ul li a")

let sections = document.querySelectorAll("section")


let allf = document.getElementById("allf");
let breakf = document.getElementById("breakf");
let lunchf = document.getElementById("lunchf");
let drinksf = document.getElementById("drinksf");
let dessertsf = document.getElementById("dessertsf");
// let icef = document.getElementById("icef");
let response = document.querySelector(".response")

let buttons = [starter, mealsf, friesf, icecreamf, drinkf]
let buttons1 = [allf, breakf, lunchf, drinksf, dessertsf]

let img=["img1", "img2", "img3", "img4", "img5", "img6"]
let title = ["title1", "title2", "title3", "title4", "title5", "title6"]
let price = ["price1", "price2", "price3", "price4", "price5", "price6"]
let dis = ["dis1", "dis2", "dis3", "dis4", "dis5", "dis6"]

let galleryimg=["iimg1", "iimg2", "iimg3"]
let gallerytitle = ["bf1", "bf2", "bf3"]
let galleryname = ["name1", "name2", "name3"]
let gallerydiv = ["gallerycontainer4", "gallerycontainer5", "gallerycontainer6", "gallerycontainer7", "gallerycontainer8"]



scrollFunction=()=>{
    if(document.body.scrollTop >20 || document.documentElement.scrollTop>20){
        navbar.style.background = "#00000043";
        navbar.style.transition = '0.5s'
        response.style.display = 'block'
    } else {
        navbar.style.background="black"
        response.style.display = 'none'
    }
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlink.forEach(links =>{
                links.classList.remove('activelink');
                document.querySelector('.navbar-nav li a[href*=' +id + ']').classList.add('activelink')
            })
        }
    })

}




window.onscroll = ()=>{scrollFunction()}



starter.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("actived")  
    }
    
    starter.classList.add("actived")
    getJson("starters.json");
});


saladf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("actived")  
    }
    saladf.classList.add("actived")
    getJson("meals.json")
} );

mainf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("actived")  
    }
    mainf.classList.add("actived")
    getJson("fries.json")
} );

dessertf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("actived")  
    }
    dessertf.classList.add("actived")
    getJson("icecream.json")
} );

// icef.addEventListener("click",()=>{
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.remove("actived")  
//     }
//     icef.classList.add("actived")
//     getJson("ice.json")
// } );

drinkf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("actived")  
    }
    drinkf.classList.add("actived")
    getJson("drink.json")
} );


async function getJson(filename){ 
    let response = await fetch(filename)
    let data = await response.json();
    for (let i = 0; i <= data.length; i++) {
        document.getElementById(title[i]).innerHTML = data[i].name;
        document.getElementById(img[i]).src = data[i].images
        document.getElementById(dis[i]).innerHTML=data[i].description
        document.getElementById(price[i]).innerHTML = data[i].price 
        console.log(data)     
    }
}
allf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons1[i].classList.remove("actived")  
    }
    
    allf.classList.add("actived")
    getAllGalleryJson("breakfast")
   
});
breakf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons1[i].classList.remove("actived")  
    }
    
    breakf.classList.add("actived")
    getGalleryJson("breakfast")
});
lunchf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons1[i].classList.remove("actived")  
    }
    
    lunchf.classList.add("actived")
    getGalleryJson("lunch")
});
dessertsf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons1[i].classList.remove("actived")  
    }
    
    dessertsf.classList.add("actived")
    getGalleryJson("desserts");
});
drinksf.addEventListener("click",()=>{
    for (let i = 0; i < buttons.length; i++) {
        buttons1[i].classList.remove("actived")  
    }
    
    drinksf.classList.add("actived")
    getGalleryJson("drinks");
});




async function getGalleryJson(_foodname){ 
    let response = await fetch("gallery.json")
    let data = await response.json();
    let menu = data[_foodname]
    for (let j = 0; j < gallerydiv.length; j++) {
        document.getElementById(gallerydiv[j]).style.display
         = 'none'
    }
    // document.querySelectorAll(".box4-container img").forEach(element => {
    //     element.style.width = '560px';
    //     element.style.height = '250px';
    // });
    // document.querySelectorAll(".view").forEach(element => {
    //     element.style.width = '560px';
    //     element.style.height =  '250px';
    // });

    for(let i=0; i<menu.length; i++){
        document.getElementById(galleryimg[i]).src=menu[i].images
        document.getElementById(galleryname[i]).innerHTML=menu[i].name
        document.getElementById(gallerytitle[i]).innerHTML=menu[i].footType
    }
    console.log(menu)
}

async function getAllGalleryJson(_foodname){ 
    let response = await fetch("gallery.json")
    let data = await response.json();
    let menu = data[_foodname]
    for (let j = 0; j < gallerydiv.length; j++) {
        document.getElementById(gallerydiv[j]).style.display
         = 'block'
    }
    // document.querySelectorAll(".box4-container img").forEach(element => {
    //     element.style.width = '280px';
    //     element.style.height = '200px';
    // });
    // document.querySelectorAll(".view").forEach(element => {
    //     element.style.width = '280px';
    //     element.style.height = '200px';
    // });

    for(let i=0; i<menu.length; i++){
        document.getElementById(galleryimg[i]).src=menu[i].images
        document.getElementById(galleryname[i]).innerHTML=menu[i].name
        document.getElementById(gallerytitle[i]).innerHTML=menu[i].footType
    }
    console.log(menu)
}