let sessions = JSON.parse(localStorage.getItem('sessions'));

for (const session of sessions) {
    let div = document.createElement('div');
    let date = document.createElement('h2');
    date.innerText = session.date;
    let time = document.createElement('p');
    time.innerText = session.time;
    div.append(date,time);
    document.body.appendChild(div)
}