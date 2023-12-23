import "./App.css";
import Button from "./Button";
import Gallery from "./Gallery";
import LoginBox from "./LoginBox";

function App() {
  return (
    <div>
      <h1>Hai Hello</h1>

      <Button />

      <div className="login_box">
        <LoginBox />
      </div>
      <div className="gallery">
        <div className="gallery_box">
          <Gallery image={'image 1'}/>
          <Gallery image={'image 2'}/>
          <Gallery image={'image 3'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
