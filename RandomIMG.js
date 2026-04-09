const dogbtn = document.getElementById('dogBtn');
const dogimg = document.getElementById('dogImage');

async function fetchDogs(){
    try{
        const response1 = await fetch ('https://random.dog/woof.json');
        if(!response1.ok){
            throw new Error('fatal error')
        }
        const data = await response1.json();
        console.log(data);
        dogimg.innerHTML = `<img src="${data.url}" width="300">`;
        console.log(data);
        
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}

dogbtn.addEventListener('click', fetchDogs);