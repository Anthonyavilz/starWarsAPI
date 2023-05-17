let getResidents = document.querySelector('.residents')

let buttonClicked = () => {
    axios.get('https://swapi.dev/api/planets?search=Alderaan')
    .then((res) => {
        console.log(res.data.results[0].residents)
        for(let i = 0; i < res.data.results[0].residents.length; i++){
            let residentsArr = res.data.results[0].residents[i]
            console.log(res.data.results[0].residents[i])
            axios.get(`${residentsArr}`)
            .then((res) => {
                console.log(residentsArr)
                let resident = document.createElement('h2')
                resident.textContent = (res.data.name)
                document.body.appendChild(resident)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })


    console.log('button clicked')
}

getResidents.addEventListener('click', buttonClicked)