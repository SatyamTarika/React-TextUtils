// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Container } from "reactstrap";

function App() {
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <Container>
        <TextForm heading="Enter The Text To Analyze" />
      </Container>
    </div>
  );
}

export default App;
