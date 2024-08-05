import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Student from './Components/Student';
import Faculty from './Components/Faculty';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <h2>Student Details</h2>
    <Student></Student>
    <br></br>
    <h2>Faculty Details</h2>
    <Faculty></Faculty>
    <br></br>
    <h2>Courses</h2>
    <Courses></Courses>
    <br></br>
    <Footer></Footer>
    </div>
  );
}

export default App;
