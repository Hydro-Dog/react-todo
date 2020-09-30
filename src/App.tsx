import React from 'react';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { AboutComponent } from './AboutModule/AboutCompenent';
import { store } from './redux/store';
import { TodosModule } from './TodosModule/TodoModule';

function App() {
  return (

    <>
    <Provider store={store}>
      <TodosModule></TodosModule>
      <Router>
        <Switch>
          <Route path="/about" component={AboutComponent} />
          <Route exact path="/" component={TodosModule} />
        </Switch>
      </Router>
    </Provider>

        {/* <TodosModule></TodosModule> */}
      </>
  );
}

export default App;