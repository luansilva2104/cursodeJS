console.log("----------WHILE----------\n")

var pizza = 11

while (pizza > 0) {
	console.log(`Você comeu um pedaço de pizza, resta ${pizza} pedaços.`)
	pizza--

	if (pizza === 0) {
		console.log("Você comeu todos os pedaços!")
	}
}

console.log("\n----------DO-WHILE----------\n")

var pizzza = 12

do {
	pizzza--
	console.log(`Você comeu um pedaço de pizza, resta ${pizzza} pedaços.`)
} while (pizzza > 0)
