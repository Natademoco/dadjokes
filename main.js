const joke = document.getElementById('joke')
const button = document.getElementById('btn')
const apiKey = 'DK9tjEzn0vrDbAzkOBqtJg==J9Cz0m9uJdDAfbTW'
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'

const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey
    }
}

async function getJoke () {
    try {
        joke.innerHTML = 'updating...'
        button.disabled = true
        button.innerHTML = 'please wait'
        const response = await fetch(apiURL, options)
        const data = await response.json()
        joke.innerHTML = `${data[0].joke}`
        button.disabled = false
        button.innerHTML = 'TELL ME A JOKE'
    } catch (error) {
        joke.innerHTML = 'try again later'
        console.log(error)
    }
}

button.addEventListener('click', getJoke)