# Terminal Notes App
This terminal-based Node.js notes taking app runs is a fun project that runs in the terminal. It helps create notes and uses a JSON file to store them. `probable-computing-machine` is a GitHub-generated name for the repository.

## Requirements
- [Node.js](https://nodejs.org/en/download/)

## Usage
- run `git@github.com:Cimmanuel/probable-computing-machine.git`
- cd into `probable-computing-machine`
- run `npm install` to install dependencies
- run `node app.js --help`. Example output:

```sh
app.js [command]

Commands:
  app.js add     Add a new note.
  app.js remove  Remove a note.
  app.js list    List your notes.
  app.js read    Read a note.

Options:
  --help     Show help                              [boolean]
  --version  Show version number                    [boolean]

```
- use one of `add`, `remove`, `list` or `read`, depending on the action you want to perform. The `--help` flag is available for each of these commands, that way you can see the required arguments needed by each command. For instance, running `node app.js add --help` tells you, from the output, that the `--title` and `--body` arguments are required by the `add` command and they must be strings.

```sh
app.js add

Add a new note.

Options:
  --help     Show help                              [boolean]
  --version  Show version number                    [boolean]
  --title    Note title.                            [string] [required]
  --body     Note body.                             [string] [required]
```

## Examples
### Adding a note

```sh
$ node app.js add --title='Test' --body='This is a test to see if it works.'
New note added!
```
Check `notes.json` and you will see it has been updated with the just created note.

### Listing notes

```sh
$ node app.js list

 Your notes 

Test
```
Test is the only note in the `notes.json` file as seen in the output.

### Reading a note

```sh
$ node app.js read --title='Test'

 Test

 This is a test to see if it works. 
```
The `--title` argument is needed by the `read` command to get the specific note you want to read.

### Removing a note

```sh
$ node app.js remove --title='Test'
Note removed!
```
The `--title` argument is needed by the `remove` command to delete your note.
