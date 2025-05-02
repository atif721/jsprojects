const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
    notesContainer.querySelectorAll(".input_box").forEach((textarea, index) => {
      textarea.value = localStorage.getItem(`note_${index}`) || "";
      textarea.addEventListener("keyup", updateStorage);
    });
  }
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
  notesContainer.querySelectorAll(".input_box").forEach((textarea, index) => {
    localStorage.setItem(`note_${index}`, textarea.value);
  });
}

function createNote() {
  const noteWrapper = document.createElement("div");
  noteWrapper.className = "note_wrapper";

  noteWrapper.innerHTML = `
    <textarea class="input_box"></textarea>
    <img src="images/delete.png" class="delete_img" />
  `;

  notesContainer.appendChild(noteWrapper);
  noteWrapper
    .querySelector(".input_box")
    .addEventListener("keyup", updateStorage);
  updateStorage();
}

createBtn.addEventListener("click", createNote);

notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete_img")) {
    e.target.parentElement.remove();
    updateStorage();
  }
});

showNotes();
