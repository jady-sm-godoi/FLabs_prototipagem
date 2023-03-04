const dimensions = [
    {
        dimensao: 'cultural',
        texto: 'Id pariatur ad exercitation aliquip. Ullamco exercitation magna sunt officia. Est aliquip et amet do Lorem. ',
        imagem: './assets/cultural.png'
    },
    {
        dimensao: 'ambiental',
        texto: 'Ipsum excepteur et eiusmod reprehenderit enim enim cillum voluptate. Consequat ex laborum ea labore commodo cupidatat. ',
        imagem: './assets/ambiental.png'
    },
    {
        dimensao: 'social',
        texto: 'In nulla quis quis magna ullamco quis. Mollit mollit tempor cupidatat proident adipisicing elit consectetur est do mollit sunt occaecat. ',
        imagem: './assets/social.png'
    },
    {
        dimensao: 'multivalor',
        texto: 'Dolor nulla et ipsum ad laborum et quis officia consectetur ad quis. Reprehenderit ullamco in dolor ipsum sit sit pariatur commodo incididunt. ',
        imagem: './assets/multivalor.png'
    }
]

const container = document.querySelector('#container')
let containerCards = ''

dimensions.forEach(dimension => {
    return containerCards += `
        <div class="card">
            <div class="face face1 ${dimension.dimensao}">
                <div class="content">
                    <img src="${dimension.imagem}">
                    <h3>${dimension.dimensao}</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>${dimension.texto}</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    `
});

container.innerHTML = containerCards
console.log(containerCards);