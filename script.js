const form = document.querySelector("form");
const input = document.querySelector("#input");
const result = document.querySelector(".result");

const FetchData = async (e) => {
    e.preventDefault();
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${input.value}&client_id=ODMRw3w-Kf2SBgW2Uut_3g9oQ0r9Xdij86SQQplziWM`;  
    const res = await fetch(URL);
    const Data = await res.json();
    result.innerHTML = "";
    console.log(Data);
    if (Data.results == "") alert("Not Found");
    else {
        const ImgBox = Data.results;
        ImgBox.forEach((e, index) => {
            result.innerHTML += `<img class="h-56 m-4 border-white border-x-4" src=${Data.results[index].urls.full} alt="" srcset="">`;
        });
    }
    input.value = "";
}

form.addEventListener("submit", FetchData);