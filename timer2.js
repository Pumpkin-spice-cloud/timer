const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write(`Thanks for using me, ciao! \n`)
    process.exit();
  }
  if (key === 'b'){
    process.stdout.write('.');
    
  }
  if (isFinite(parseInt(key)) && parseInt(key) > 0){
    process.stdout.write(`setting time for ${key} seconds \n`)
    setTimeout(() => process.stdout.write('.'), key * 1000);
  }
  
});


