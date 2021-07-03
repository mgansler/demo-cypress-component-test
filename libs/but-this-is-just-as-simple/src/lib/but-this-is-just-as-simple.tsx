import { SomethingShared } from '@demo-cypress-component-test/something-shared';

/* eslint-disable-next-line */
export interface ButThisIsJustAsSimpleProps {}

export function ButThisIsJustAsSimple(props: ButThisIsJustAsSimpleProps) {
  return (
    <div>
      <h1>Welcome to but-this-is-just-as-simple!</h1>
      <SomethingShared/>
    </div>
  );
}

export default ButThisIsJustAsSimple;
