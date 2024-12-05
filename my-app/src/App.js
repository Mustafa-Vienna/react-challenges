import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavbarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <NavbarSimple />
    </div>
  );
}

export default App;