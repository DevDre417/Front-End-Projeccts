
//Model

const render = () => {
  const ser = document.getElementById('inp');
  
  const container = document.getElementById('todoContainer');


  const addButton = document.getElementById('addB');
  addButton.onclick = () => {

    let id = new Date().getTime();

    const listItem = ser.value;
    const cont = document.createElement('div')
    cont.id = id;
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.style = "margin-left: 5px; margin:top: 5px;font-size: 18px; position: relative; bottom: 6px; padding: 3px;"
    cont.innerText = listItem;
    cont.appendChild(deleteButton);
    container.appendChild(cont);

    deleteButton.onclick = () => {
            const x = document.getElementById(id);
            x.innerHTML = '';
    }

  }
}

render();








//View



//Controller
