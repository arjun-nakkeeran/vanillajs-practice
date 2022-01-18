

(async() => {

    const getUsers = async () => {
        let result = await fetch('https://randomuser.me/api?results=10');
        let data = await result.json();
        console.log(data);
        return data;
    }

    const users = await getUsers();
    const timeline = document.querySelector('#timeline');
    users.results.forEach(person => {
        let img = document.createElement('img');
        img.src = person.picture.medium;
        timeline.appendChild(img);
    });
})()