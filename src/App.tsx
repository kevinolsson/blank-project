import { useEffect } from 'react';
import { useStore } from './state/useStore';
import logo from './logo.svg';
import classes from './App.module.css';

type TThemeEnum = 'light' | 'dark';

function App() {
  const { count, increaseCount, decreaseCount } = useStore((state) => state);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      ((): TThemeEnum => {
        if (localStorage.getItem('theme')) {
          return localStorage.getItem('theme') as TThemeEnum;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      })()
    );
  }, []);

  const switchTheme = (): void => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <img src={logo} className={classes.appLogo} alt="logo" />
        <p>Hello Vite + React!</p>
        <div className={classes.counterWrapper}>
          <button type="button" onClick={() => decreaseCount(1)}>
            -
          </button>
          <h1>{count}</h1>
          <button type="button" onClick={() => increaseCount(1)}>
            +
          </button>
        </div>
        <button onClick={switchTheme}>Toggle theme</button>
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
