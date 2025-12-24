// console.log(window.document.body)


// const para = document.getElementById("para")
// console.log(para)
// para.style.background = "red"

// const container = document.getElementsByClassName("container");
// console.log(container);
// container[0].style.background = "blue"
// container[1].style.background = "red"


// const btn = document.getElementsByTagName("button");
// btn[0].style.background = "green"
// btn[1].style.background = "red"

// document.querySelector(".container").style.background = "red"
// document.querySelector("button").style.background = "red"

// const container = document.querySelectorAll(".container");
// console.log(container )
// container.forEach((item)=>{
//     item.style.background = "red"
// })


// const textVisible = document.getElementById("textVisible");


// textVisible.textContent = "this is visible content"

// const main = document.querySelector("#main");

// main.innerHTML = `<h1>this is content</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iusto explicabo voluptate voluptatum accusamus placeat obcaecati perspiciatis perferendis itaque tenetur, molestias veritatis, voluptates excepturi nam deserunt! Possimus at consectetur delectus.</p>
//       <img src="../../images/download.jpeg" alt=""></img>`


// const mainDiv = document.querySelector("#mainDiv");

// const card = document.createElement("div")
// card.setAttribute("class","card")

// card.innerHTML = "<h1> this is appended text</h1>"

// mainDiv.appendChild(card)

// const hyperLink = document.getElementById("hyperLink");

// hyperLink.setAttribute("href","https://www.flipkart.com")

document.getElementById("alertBtn").addEventListener("click",()=>{
    const name = "adam"
    alert(`hello,${name}`)
    window.document.body.style.background = "black"
})




