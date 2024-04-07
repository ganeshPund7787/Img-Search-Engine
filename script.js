const form = document.querySelector("form");
const input = document.querySelector("#input");
const result = document.querySelector(".result");

const FetchData = async (e) => {
    e.preventDefault();
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=ODMRw3w-Kf2SBgW2Uut_3g9oQ0r9Xdij86SQQplziWM`;  
    
    const res = await fetch(URL);
    const Data = await res.json();
    if (Data.results == "") alert("Not Found");
    else {
        result.innerHTML = "";
        const ImgBox = Data.results;
        ImgBox.forEach((e, index) => {
            const Img = Data.results[index].urls.full;
            result.innerHTML += `<div class="border-2 border-fuchsia-50 m-4"><img class="h-56 p-4" 
            src=${Img} alt="" srcset="">
            <a href="" download=${Img}><button class="bg-white m-2 px-2 py-1 hover:bg-sky-500 hover:ring-sky-500">Download</button></a>
            </div>`;
        });
    }
    input.value = "";
}

form.addEventListener("submit", FetchData);