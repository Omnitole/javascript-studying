let id = new URL(location.href).searchParams.get('id')
fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
    let block = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = `Id - ${user.id}, ${user.name}`;
    let blockBody = document.createElement('p');
    blockBody.innerText = `This users username is ${user.username}, email - ${user.email}, address - ${user.address.city}, ${user.address.suite}, ${user.address.street}.
    Zipcode - ${user.address.zipcode}, geo - ${user.address.geo.lat},${user.address.geo.lng}. Phone number - ${user.phone}, website - ${user.website},works in ${user.company.name},
     their catchphrase is - ${user.company.catchPhrase} and bs - ${user.company.bs}`
    block.append(h2,blockBody);
    document.body.appendChild(block)
})