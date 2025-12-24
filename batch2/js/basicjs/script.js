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

// main.innerHTML = ` <h1>this is a content</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel, minima odio eligendi unde, soluta sunt facere laudantium rem sapiente labore nostrum consectetur, illo alias. Debitis ipsum laboriosam molestias in.</p>
//       <img src="../../images/download.jpeg" alt=""></img>`


// const mainDiv = document.getElementById("mainDiv")

// const card  = document.createElement("div")
// card.setAttribute('class','carddata')
// card.innerHTML = '<h1>this is the appended text</h1>'

// mainDiv.appendChild(card)



// const linkPage = document.getElementById("linkPage")

// linkPage.setAttribute("href","https://www.flipkart.com")


const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener('click',()=>{
    const name = "eve"
    alert(`hello ${name}`)
})


