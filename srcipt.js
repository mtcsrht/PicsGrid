const rowContent = document.getElementById('row');

const fetchData = async () => {

    const response = fetch('https://picsum.photos/v2/list').then(res => res.json());
    
    return response;
}

async function renderPage()
{
    
    const data = await fetchData();
    console.log(data);
    
    data.forEach(element => {
        rowContent.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-12">
            <img src="${element.download_url}" alt="" class="img-fluid">
            <h3>${element.author}</h3>
        </div>`
    });
    
}

window.onload = () => {
    renderPage();
}