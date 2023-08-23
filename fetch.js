// Make a fetch request to load monsters.json
fetch('monsters.json')
// Check if data recieved from request is readable translate from JSON to JS readable
.then(response => response.json())
// Do something with the data
.then
(
    // Variable function monsters
    monsters =>
    {
        const rootDiv = document.getElementById("root");

        // Loop through JSON data and display within HTML
        for(let i = 0; i < monsters.length; i++)
        {
            const HTML = document.createElement('div');
            HTML.innerHTML = 
            `
            $<strong>Monster: </strong> ${monsters[i].monster}
            <br><strong>Location: </strong>${monsters[i].location}
            <br><strong>Movies: </strong>${monsters[i].movies}
            <hr>
            `;

            rootDiv.appendChild(HTML);

        }
    }
    
)
// Any errors with the above process, deal with it here
.catch(error => console.error(error))