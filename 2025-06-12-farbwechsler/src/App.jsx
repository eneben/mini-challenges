import "./App.css";

function App() {
  return (
    <>
      <h1>Farbwechsler</h1>
      <p>Klicke auf den Button, um die Hintergrundfarbe zu ändern.</p>
      <button
        onClick={() => {
          document.body.style.backgroundColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        }}
      >
        Hintergrundfarbe ändern
      </button>
      <p>
        Hinweis: Die Hintergrundfarbe wird zufällig ausgewählt und kann
        wiederholt werden.
      </p>
    </>
  );
}

export default App;
