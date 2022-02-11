const arg = process.argv.slice(2);
switch (arg[0]) {
	case '-o':
		console.log('-o tried');
		break;

	case '-b':
		console.log('-b tried');
		break;

	default:
		console.log('Bad things inputted');
}
