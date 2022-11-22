

export const api = (url) =>  fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log('in fetch', data);
        return data;
    })
    .catch(err => err);

