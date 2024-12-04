form.addEventListener('submit', event => {
    event.preventDefault();

    const database = document.getElementById('database').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const endpoint = database === 'mysql' ? '/mysql/records' : '/mongodb/records';
    const data = { name, email, flexibleData: {} };

    fetch(`http://localhost:3000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Registro guardado con éxito.');
            form.reset();
        } else {
            alert('Error al guardar el registro.');
        }
    })
    .catch(err => console.error(err));
});
