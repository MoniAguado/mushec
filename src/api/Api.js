
const getData = () => {
    return fetch('./data.json')
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
        console.log(error)
    });
};

export default getData