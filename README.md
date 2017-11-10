# Pursuance

## WARNING

Do not expose the server in this branch (`develop`) to the world; for
the moment, it is meant for presentation/demonstration purposes only,
as we are proparing to demo this software and to have users test it
locally before adding a combination of cryptographic auth and
PostgREST's JWTs (JSON Web Tokens) shortly after our demo on November
4, 2017.  Hang tight!


## Getting Started

Please fork and clone down this repository to your local machine.

If you don't have React.js globally installed, run this command:

```
npm install -g create-react-app
```

Next, `cd` into the `pursuance` folder.

Run this command to install node modules:

```
npm install
```

To run the React App on localhost and watch for updates:

```
npm run start
```

Then, in another terminal, to set up the database and run PostgREST,
which our Go code uses for persistence, run:

``` $ cd db/ ```

If you're on Linux, now run

``` $ sudo -u postgres bash init_sql.sh ```

On Mac OS X, instead run

``` $ sudo -u $USER bash init_sql.sh ```

(The following commands should be run regardless of whether you're on
Linux or OS X.)

``` $ postgrest postgrest.conf ```

Then, in another terminal session run this (**an error about not
finding `github.com/PursuanceProject/pursuance` is OK here**) --

``` $ go get ./... ```

``` $ npm run build ```

``` $ go build ```

``` $ ./pursuance ```

Then view <http://localhost:8080>.


## Conventions

Please follow these naming and spacing conventions when submitting a pull request:
[React + Redux Conventions](https://unbug.gitbooks.io/react-native-training/content/45_naming_convention.html).
