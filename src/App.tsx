import { useStore } from './state/useStore';
import logo from './logo.svg';
import classes from './App.module.css';

function App() {
  const { count, increase, decrease } = useStore((state) => state);

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <div className={classes.counterWrapper}>
          <button type="button" onClick={() => decrease(1)}>
            -
          </button>
          <h1>{count}</h1>
          <button type="button" onClick={() => increase(1)}>
            +
          </button>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={classes.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className={classes.appLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
