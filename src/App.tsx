import "./App.css";
import { Navbar } from "./component";
import { About, Appt, Contact, Header, Map, Services } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Appt />
      <Contact />
      <Map />
    </div>
  );
}

export default App;
