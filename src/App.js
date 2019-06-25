import React, { lazy, Suspense } from 'react';
import { Counter, HooksCounter, Todo } from './components/Hooks';

// Components
// Static
// import LazyComponent from './components/LazyComponent';
// Dynamic
const LazyComponent = lazy(() => import('./components/LazyComponent'));



class App extends React.Component {

  names = ['Jeff', 'Tayte', 'Justin']

  state = {
    name: ''
  };

  componentDidMount() {
    this.generateName();
  };

  generateName = () => this.setState({ name: this.names[Math.floor(Math.random() * this.names.length)] });

  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent name={this.state.name} />
        </Suspense>
        <Counter />
        <HooksCounter />
        <h1>Todo List</h1>
        <Todo />
      </div>
    );
  }
}

export default App;