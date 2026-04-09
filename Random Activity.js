const button = document.getElementById('activityBtn');
const activityText = document.getElementById('activityText');

async function fetchActivity(){
    try {
        const response1 = await fetch('https://apis.scrimba.com/bored/api/activity');

      if (!response1.ok) {
            throw new Error('Error fetching activity');
        }        const data = await response1.json()
          console.log(data);
    activityText.innerHTML = `i did it again <br> ${data.activity}<br>Type: ${data.type}<br>  Participants: ${data.participants}<br>
     Price: ${data.price}<br>  Link: ${data.link}`;

    } catch (error) {
        console.error('Error fetching activity:', error);
    }
       
    
}

button.addEventListener('click', fetchActivity);