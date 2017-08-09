# simple-react-state-machine
Simple table showing previous and next state from user input.

##Set up

Clone the repo and install the node dependencies.

```
git clone https://github.com/jgarcia99/simple-react-state-machine
cd simple-react-state-machine
npm i
```

##Usage

###Development

Run the npm script `dev` to develop.

```
npm run dev
```

A webpack server will now be running on `4000`, serving the contents of the `public` directory. The `entry` files are in `src` - `index.js` and `style.css`.

NOTE: this is using webpack-dev-server, not actually overwriting the files in `public`. For that, you will need to run the build script.

###Production

Run the npm script 'build' to update `style.css` and `index.js` in the `public` directory. Upload this directory to your web server.

```
npm run build
```