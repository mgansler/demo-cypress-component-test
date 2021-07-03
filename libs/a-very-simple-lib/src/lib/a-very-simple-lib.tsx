import { SomethingShared } from '@demo-cypress-component-test/something-shared';

/* eslint-disable-next-line */
export interface AVerySimpleLibProps {}

export function AVerySimpleLib(props: AVerySimpleLibProps) {
  return (
    <div>
      <h1>Welcome to a-very-simple-lib!</h1>
      <SomethingShared/>
    </div>
  );
}

export default AVerySimpleLib;
