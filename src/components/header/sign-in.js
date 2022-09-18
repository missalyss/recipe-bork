import React from 'react';

const SignIn = ({}) => {
    const fetchAlyssa = () => {
console.log('FETCHED: ', );
  fetch('/lou')
  .then(response => response.json())
  }

    return (
      <form>
<button type="submit" onSubmit={() => fetchAlyssa()}>CLICK ME</button>
      </form>
    )
}

export default SignIn;

