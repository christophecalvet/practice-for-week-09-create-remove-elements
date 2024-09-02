/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
       let dogbreed = url.split("/")[4]

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */


         const newDog = document.createElement("li");
         newDog.innerHTML = `
                  <figure>
                    <img src="${url}" />
                    <figcaption>${dogbreed}</figcaption>
                </figure>
         `;


            // add the newly created element and its content into the DOM
            let gallery = document.getElementsByClassName("gallery")
            let galleryul = gallery[0].children[0]
            galleryul.appendChild(newDog);


        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    let gallery = document.getElementsByClassName("gallery")
    let firstdogli = gallery[0].children[0].children[0]

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    firstdogli.remove();

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    //let gallery = document.getElementsByClassName("gallery")
    //let lastdogli = gallery[0].children[0].children[-1]
    lastdogli = lastDogCard = document.body.querySelector(".gallery > ul > :last-child")

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    lastdogli.remove();
});
