const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index )=>{
    let header = item.querySelector("header");
    header.addEventListener("click",() =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollheight property returns the height of an element including padding, but excluding borders, scroller or margin
            item.querySelector("i").classList.replace("bxs-chevron-down","bxs-chevron-up");
        }else{
            description.style.height ="0px";
            item.querySelector("i").classList.replace("bxs-chevron-up","bxs-chevron-down");
        }
        removeOpen(index); // calling function & also passing the index number of the clicked header
        //console.log(description);
    })

    
})
function removeOpen(index1){
    accordionContent.forEach((item2,index2) =>{
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("bxs-chevron-up","bxs-chevron-down");

        }
    })
}