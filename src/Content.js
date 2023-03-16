import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

    const handleClick = () => {
        console.log('You clicked it');
    };

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`);
    };

    const handleClick3 = (event) => {
        console.log(event.target.innerText);
    };

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click It</button>
            <button onClick={() => handleClick2('Dave')}>Click It</button>
            <button onClick={(event) => handleClick3(event)}>Click It</button>
        </main>
    )
}

export default Content