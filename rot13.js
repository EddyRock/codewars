function rot13(string) {
	const alphabet = new Array( 26 )
		.fill( 1 )
		.map( ( _, i ) => {
			return {
				l: String.fromCharCode( 65 + i ).toLocaleLowerCase(),
				u: String.fromCharCode( 65 + i ).toLocaleUpperCase(),
			};
		});

	const getParsedSymbhol = (letter, array) => {
		let i = (array.indexOf(letter)) + 13;
		if(i >= 26) {
			i = i - 26;
		}
		return array[i];
	};

	return string
		.split('')
		.map(l => {
			const la = alphabet.map(i => i.l);
			const ua = alphabet.map(i => i.u);

			if(!la.includes(l) && !ua.includes(l)) {
				return l;
			}

			const isUpperCase = ua.includes(l);

			if (isUpperCase) {
				return getParsedSymbhol(l, ua)
			} else {
				return getParsedSymbhol(l, la)
			}
		})
		.join('');
}
