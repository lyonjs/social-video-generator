#!/usr/bin/env node
const fs = require('fs');
const childProcess = require('child_process');
const {promisify} = require('util');
const yargs = require('yargs/yargs');
const camelCase = require('lodash/camelCase');
const {argv} = yargs(process.argv);
const readFile = promisify(fs.readFile);
const debugFactory = require('debug');

const error = debugFactory('app');
const info = debugFactory('app');
const debug = debugFactory('app:debug');

const run = async () => {
	const jsonFile = argv.file;
	const composition = argv.composition;
	if (!jsonFile) {
		error('Please provide JSON file to render with `--file`');
		process.exit(1);
	}
	if (!composition) {
		error('Please provide remotion composition to render with `--composition`');
		process.exit(1);
	}
	info(`Generating videos from file: ${jsonFile}`);

	try {
		const fileContent = await readFile(jsonFile, 'utf-8');
		const talks = JSON.parse(fileContent);
		talks.forEach((talk, index) => {
			info(`Rendering video ${index + 1}/${talks.length}`);
			const speakerNames = talk.speakers
				.map((speaker) => speaker.name)
				.join('-');
			const fileName = `${talk.id}-${camelCase(speakerNames)}`;
			childProcess.spawnSync('pnpm', [
				'remotion',
				'render',
				composition,
				`out/${fileName}.mp4`,
				`--props=${JSON.stringify(talk)}`,
			]);
			info(`File out/${fileName}.mp4`);
			childProcess.spawnSync('pnpm', [
				'remotion',
				'still',
				composition,
				`out/${fileName}.jpeg`,
				`--props=${JSON.stringify(talk)}`,
				`--frame=-1`,
			]);
			info(`File out/${fileName}.jpeg`);
		});
	} catch (error) {
		error(`Can't parse JSON file with error`, error);
		process.exit(1);
	}
};

run();
