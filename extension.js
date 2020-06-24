// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const download = require('download');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gitInVscode" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.gitinvs', function () {
		// // The code you place here will be executed every time your command is executed
		// const configParams = vscode.workspace.getConfiguration('download-file'),
		// 	defaultFolder = vscode.workspace.workspaceFolders[0].uri.fsPath + '/' + configParams.get('defaultFolder');
		// Display a message box to the use
		console.log("came");
		vscode.window.showInputBox({ prompt: 'Enter the Url you wish to import' }).then((res) => {
			if (!res) {
				vscode.window.showErrorMessage("Invalid URL!");
				return;
			}
			getRepo(res);
		});
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);
}
// satvik1002/portfolio
function getRepo(res) {
	res = "https://codeload.github.com/" + res + "/zip/master";
	(async function () {
		await download(res, "download", { extract: true });
	})()


}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
