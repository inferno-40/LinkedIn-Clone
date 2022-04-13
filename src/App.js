import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { getUserAuth } from "./actions";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
