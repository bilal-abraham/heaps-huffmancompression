const arg = process.argv.slice(2);
arg[1] = Number(arg[1]);
arg[2] = Number(arg[2]);
switch (arg[0]) {
	case '+':
		console.log(`Result of ${arg[1]} 
        + ${arg[2]} = ${arg[1] + arg[2]}`);
		break;

	case '*':
		console.log(`Result of ${arg[1]} 
        * ${arg[2]} = ${arg[1] * arg[2]}`);
		break;

	case '-':
		console.log(`Result of ${arg[1]} 
        - ${arg[2]} = ${arg[1] - arg[2]}`);
		break;

	case '/':
		if (arg[2] == 0) {
			console.log('cannot be divided by zero!!');
		} else {
			console.log(`Result of ${arg[1]} 
            / ${arg[2]} = ${arg[1] / arg[2]}`);
		}
		break;

	case '%':
		if (arg[2] == 0) {
			console.log('cannot be divided by zero!!');
		} else {
			console.log(`Result of ${arg[1]} 
            % ${arg[2]} = ${arg[1] % arg[2]}`);
		}
		break;

	default:
		console.log(`operation cannot be performed!!`);
}
