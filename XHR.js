// Using XMLHttpRequest()

var request = new XMLHttpRequest();

// Open JSON file
request.open('GET', 'monsters.json');

// Load information within a custom function that is called when page loads
request.onload = function()
{
    // Reference to our root div
    const rootDiv = document.getElementById('root');
    // Parse JSON data
    const data = JSON.parse(this.response);

    // If request and JSON parsing is sucessful
    if(request.status >= 200 && request.status < 400)
    {
        data.forEach
        (
            monsters =>
            {
                const name = document.createElement('h1');
                name.textContent = monsters.monsters

                const location = document.createElement('h1');
                location.textContent = monsters.location;

                const movies = document.createElement('h2');
                movies.textContent = monster.movies;

                rootDiv.appendChild(name);
                rootDiv.appendChild(location);
                rootDiv.appendChild(movies);
            }
        );
    }
    else
    {
        const errorMessage = document.createElement('h1');
        errorMessage.textContent = "Data did not load";
        rootDiv.appendChild(errorMessage);
    }
}

request.send();