//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
        const output = process.cwd(data);
        // console.log(process);
        process.stdout.write(output);
});


// const cmd = data.toString().trim(); //remove the newline

// process.stdout.write('You typed: ' + cmd);
// process.stdout.write('\nprompt > ');