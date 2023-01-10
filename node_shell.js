const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'5d4ee702-6ee4-47e3-8dd0-b39bb138ea6f'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
