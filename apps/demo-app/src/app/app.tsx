import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { AVerySimpleLib } from '@demo-cypress-component-test/a-very-simple-lib';
import { ButThisIsJustAsSimple } from '@demo-cypress-component-test/but-this-is-just-as-simple';

export function App() {
  return <div>
    <h1>Welcome to demo-app!</h1>
    <AVerySimpleLib />
    <ButThisIsJustAsSimple />
  </div>;

}

export default App;
