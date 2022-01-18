// Function Generators

function* busStops() {
    yield 'Pondicherry';
    yield 'Marakanam';
    yield 'Kadapakkam';
    yield 'Kalpakkam';
    yield 'Mahapalipuram';
    yield 'Kovalam';
    yield 'Sholinganallur';
    yield 'Thiruvanmiyur';
}

let generator = busStops();
console.log(generator);

const olEle = document.querySelector('#stop-label');

document.querySelector('#action').addEventListener('click', () => {
    let {value, done} = generator.next();

    if (done) {
        console.log('We made it');
        document.querySelector('#action').setAttribute('disabled', true);
    } else {
        let listItem = document.createElement('li');
        listItem.textContent = value;
        olEle.appendChild(listItem);
        console.log(value);
    }

});
