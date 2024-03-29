#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function init(isRetry) {
	const args = process.argv.slice(2);
	const packageName = args[0];
	if (packageName) {
		const sourceDir = path.join(__dirname, './template');
		const targetDir = `./${packageName}`;
		copyDir(sourceDir, targetDir);
		updatePackageName(packageName);
		await runCmdAtPath('npm install', targetDir);
		await runCmdAtPath('git init', targetDir);
	} else {
		if (isRetry) {
			console.error('bruh');
		} else {
			init(true);
		}
	}
}

function copyDir(sourceDir, destinationDir) {
	// Create the destination directory if it doesn't exist
	if (!fs.existsSync(destinationDir)) {
		fs.mkdirSync(destinationDir);
	}

	// Get all files and directories in the source directory
	const files = fs.readdirSync(sourceDir);

	// Loop through each file/directory in the source directory
	for (const file of files) {
		const sourcePath = path.join(sourceDir, file);

		const dotConfigs = ['gitignore', 'env'];
		const destinationFileName = dotConfigs.includes(file) ? `.${file}` : file;
		const destinationPath = path.join(destinationDir, destinationFileName);

		// Check if the file is a directory
		if (fs.statSync(sourcePath).isDirectory()) {
			// Recursively copy the subdirectory
			copyDir(sourcePath, destinationPath);
		} else {
			// Copy the file
			fs.copyFileSync(sourcePath, destinationPath);
		}
	}
}

function updatePackageName(packageName) {
	const packageLocation = `./${packageName}/package.json`;
	const packageJson = JSON.parse(fs.readFileSync(packageLocation, 'utf8'));
	const updatedPackageJson = { name: packageName, ...packageJson };
	fs.writeFileSync(packageLocation, JSON.stringify(updatedPackageJson, null, 2));
}

async function runCmdAtPath(cmd, path) {
	try {
		const { stdout, stderr } = await exec(cmd, { cwd: path });
		if (stdout) {
			console.log(stdout);
		}
		if (stderr) {
			console.error(stderr);
		}
	} catch (error) {
		console.error(error);
	}
}

init();
