import { Router } from "./routes/Routes";

function App() {
  const disableRightClick = (event: any) => {
    if (event.type === "contextmenu") {
      event.preventDefault();
    } else if (
      event.type === "keydown" &&
      event.ctrlKey &&
      event.keyCode === 67
    ) {
      event.preventDefault();
    }
  };
  document.addEventListener("contextmenu", disableRightClick);
  document.addEventListener("keydown", disableRightClick);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
