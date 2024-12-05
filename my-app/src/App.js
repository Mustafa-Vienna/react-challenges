import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavbarSimple from './components/NavBarSimple';
import EventClass from './components/EventClass';
import EventFunctional from './components/EventFunctional';
import "./App.css";


function App() {
  return (
    // <div className={css.App}>
    <div className="App">
      {/* Add your components here */}
      {/* <Sidebar />
      <NavbarSimple /> */}
      <EventFunctional />
      <EventClass />
    </div>
  );
}

export default App;