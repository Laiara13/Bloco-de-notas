/************************************************

==========Definir os principais objetos==========

************************************************/

let addNote = document.querySelector('#add-note');//Botão de para adicionar nota
let closeModal =  document.querySelector('#close-modal'); //fechar janela modal com os detalhes da nota.
let modal = document.querySelector('#modal'); //Modal para edição das notas
let modalView = document.querySelector('#modal-view'); //Modal para exibição dos detalhes da nota
let notes = document.querySelectorAll('.item-note');//Lista divs com dados das notas
let btnSaveNote = document.querySelector("#btn-save-note"); //icone para salvar nota
let btnCloseNote = document.querySelector("#btn-close-note");//icone para fechar modal de edição de nota.

/************************************************

=====================EVENTOS=====================

************************************************/

addNote.addEventListener('click',
(evt)=>{
  evt.preventDefault();
  modal.style.display = 'block';
  notes.style.display = 'none';
  addNote.style.display = 'none';
});

btnCloseNote.addEventListener('click', (evt)=>{
  evt.preventDefault();
  modal.style.display = 'none';
  notes.style.display = 'flex';
  addNote.style.display = 'block';
});

btnSaveNote.addEventListener("click", (evt)=>{
    evt.proventDefault();

    let data = {
        id: document.querySelector("#input-id").value,
        title: document.querySelector("#input-title").value,
        content: document.querySelector("#input-content").value,
        lastTime: new Date().getTime(),
    }
});

/************************************************

=====================FUNÇÕES=====================

************************************************/

const saveNote = (data) => {
    data = JSON.stringify(data);

    console.log(data);
    localStorage.getItem('notes');//se não tiver notes ele retorna um valor nulo

    localStorage.setItem('notes', data);

};