const apiBaseUrl = 'https://api.giphy.com/v1/gifs/search'

const apiKey = 'KuDu7Ff2RlTHg2LsomjoEdU9X4xcN7MI'



window.onload = () => {
    
}

function search()
{
    let searchQuery = document.querySelector('.searchField').value
    fetch(apiBaseUrl+`?q=${searchQuery}&`+`api_key=${apiKey}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
            data.data.forEach((item, index) => {
                document.querySelector('.images').innerHTML += `
                <div class=" shadow-lg inner flex-grow p-1 bg-blue-800 rounded">
                    <img src= '${item.images.fixed_width.url}'>
                </div>`
            })
    });
}