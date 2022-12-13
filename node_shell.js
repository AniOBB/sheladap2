const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'d1a7b753-005a-479e-95e0-681f41e232b6'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
