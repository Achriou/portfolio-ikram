

const textAnim = document.querySelector('h1');
new Typewriter(textAnim)
    .typeString('<br> Je suis ikram achriou')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString('<strong>Junior FRONT-END </strong>Developer')
    .pauseFor(1000)
    .start();

    console.log(textAnim);