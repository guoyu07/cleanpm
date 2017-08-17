# cleanpm
A small project to clean npm_modules folders under a certain directory and all its sub-directories.

## How to Use
1. Make sure you have node.js installed
2. Run `npm start [directory]` where the 'directory' parameter is required. It can be either relative or absolute path.
3. Wait...for a long time if the directory to clean is huge

## Example
`npm start ..\Projects`

## Workflow
1. Start from the path from command line input
2. Enumerate all subdirectories of current path
3. If there is a subdirectory called "npm_modules", then delete it (asynchronously) and return to upper level; otherwise go back to step 2 with each subdirectory as current path

## Note
1. Only the subfolder called "npm_modules" will be deleted; a file/link with this name is ignored
2. As long as one "npm_modules" subfolder is found, no other subfolders under the same parent will be ignored
