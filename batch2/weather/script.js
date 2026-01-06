const fetchData = async (cityName)=>{
    const apiKey = "e25ddb66337bc8c7f6c572ffe0527d30"
    const error = document.getElementById("error")
    const output = document.getElementById("output")

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    if(!response.ok){
        error.textContent = "failed to fetch"
    }
    const data = await response.json();
    console.log(data)
    const temp = Math.floor(data.main.temp)
    output.innerHTML = `
        <h1>${data.name}</h1>
        <h1>${temp}°C</h1>

    `

}


const callerFun = ()=>{
    const searchInput = document.getElementById("searchInput").value.trim();
    const error = document.getElementById("error");
    error.style.color = "red"
    if(!searchInput){
        error.textContent = "enter city name"
        return
    }
    console.log(searchInput)
    fetchData(searchInput)

}