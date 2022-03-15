import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import SingleNote from "./screens/SingleNote/SingleNote";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/SingleNote/CreateNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login"  component={LoginScreen} />
        <Route path="/register"  component={RegisterScreen} />
        <Route
          path="/mynotes" 
          component={({ history }) => (
            <MyNotes search={search} history={history} />
          )}
        />
        <Route path="/notes/:id"  component={SingleNote} />
        <Route path="/createnote"  component={CreateNote} />;
        <Route path="/profile"  component={ProfileScreen} />
        </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
