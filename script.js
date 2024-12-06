const resultDiv = document.querySelector(".result");
const url = prompt("enter the URL to fetch:");

function fetchData(url) {
    const intitalPromise = fetch(url).then((res) => {
        const header = document.createElement("h3");
        header.textContent = `the response from the api`
        return res.json();
    }).then((data) => {
        const header = document.createElement("h3");
        header.textContent = `the received data`;
        resultDiv.appendChild(header);
        console.log(data);
        data.forEach((val) => {
            const dataBox = document.createElement("p");
            dataBox.textContent = `${JSON.stringify(val)}`;
            resultDiv.appendChild(dataBox);
        })
    })
}

fetchData(url);