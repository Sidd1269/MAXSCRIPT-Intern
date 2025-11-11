fetch("https://randomuser.me/api/?results=10")

// .then((rawdata)=>{
//    return rawdata.json();
// })
// .then(data => {
//     console.log(data.results[0].name);
    
// })
// .catch((err) => {
//     console.log(err); 
// })

.then((raw) => raw.json())
.then((data) => {
        const cardContainer = document.getElementById('card-container');
        
        data.results.forEach(function(user) {
            const card = `
                <div class="card">
                    <img src="${user.picture.large}" alt="Profile Image" class="profile-img">
                    <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
                    <div class="user-info">
                        <p>Age: ${user.dob.age}</p>
                        <p>Location: ${user.location.city}, ${user.location.country}</p>
                    </div>
                    <a href="mailto:${user.email}" class="user-email">${user.email}</a>
                </div>
            `;
            cardContainer.innerHTML += card;
        });
    })
    .catch(error => console.error('Error:', error));
