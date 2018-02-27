# Pursuance

## WARNING

Do not expose the server in this branch (`develop`) to the world; for
the moment, it is meant for presentation/demonstration purposes only,
as we are proparing to demo this software and to have users test it
locally before adding a combination of cryptographic auth and
PostgREST's JWTs (JSON Web Tokens) shortly after our demo on November
4, 2017.  Hang tight!


## Linux Quickstart

If you're trying to run Pursuance on a Debian-based Linux distro (such
as Ubuntu) that does _not_ already have Go installed, then just run
this one command:

```
curl https://raw.githubusercontent.com/PursuanceProject/pursuance/develop/install_linux.sh | bash
```

You'll be asked to type in your `sudo` password, then to type two
other commands, but after that, Pursuance should be running on your
system!


## Getting Started

#### Go

If you're on Linux or macOS, and if you don't already have
[Go](https://golang.org/dl/) version 1.8 or newer installed
(`$ go version` will tell you), install Go by running

```
curl https://raw.githubusercontent.com/PursuanceProject/install-go/master/install-go.sh | bash
source ~/.bashrc
```

then grab and build the `pursuance` source:

```
go get github.com/PursuanceProject/pursuance
```


#### JavaScript

If you're on Linux, and if you don't already have Node 7.x installed,
install Node by running

```
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install nodejs
```


###### React

If you don't have React.js globally installed, run

```
[sudo] npm install -g create-react-app
```

(The `sudo` may or may not be required, depending on your system.)


### macOS Instructions

If you don't already have Postgres 9.5 or newer installed and running,
install it with Homebrew:

```
brew install postgresql
```

Install JS dependencies and start Pursuance's auto-reloading dev server:

```
cd $(go env GOPATH)/src/github.com/PursuanceProject/pursuance
npm install
npm run build
npm run start
```

**In another terminal**, run database migrations, download
`postgrest`, and have `postgrest` connect to Postgres:

```
cd $(go env GOPATH)/src/github.com/PursuanceProject/pursuance/db
sudo -u $USER bash init_sql.sh
wget https://github.com/begriffs/postgrest/releases/download/v0.4.3.0/postgrest-v0.4.3.0-osx.tar.xz
tar xvf postgrest-v0.4.3.0-osx.tar.xz
./postgrest postgrest.conf
```

**In a 3rd terminal**, run Pursuance's Go backend:

```
cd $(go env GOPATH)/src/github.com/PursuanceProject/pursuance
go build
./pursuance
```

Pursuance should now be running on <http://localhost:8080>!


### Linux Instructions (Debian/Ubuntu or similar)

If you don't already have Postgres 9.5 or newer installed and running,
install it:

```
sudo apt-get install postgresql postgresql-contrib
```

Install JS dependencies and start Pursuance's auto-reloading dev server:

```
cd $(go env GOPATH)/src/github.com/PursuanceProject/pursuance
npm install
npm run start
```

**In another terminal**, run database migrations, download
`postgrest`, and have `postgrest` connect to Postgres:

```
cd $(go env GOPATH)/src/github.com/PursuanceProject/pursuance/db
sudo -u postgres bash init_sql.sh
wget https://github.com/begriffs/postgrest/releases/download/v0.4.3.0/postgrest-v0.4.3.0-ubuntu.tar.xz
tar xvf postgrest-v0.4.3.0-ubuntu.tar.xz
./postgrest postgrest.conf
```

**In a 3rd terminal**, run Pursuance's Go backend:

```
cd $(go env GOPATH)/src/github.com/PursuanceProject/pursuance
go build
./pursuance
```

Pursuance should now be running on <http://localhost:8080>!


### Production Deployment Build

Same as the Linux commands above, but replace

```
npm run start
```

with

```
npm run build
```

and replace

```
go build
./pursuance
```

with

```
go build
sudo setcap cap_net_bind_service=+ep pursuance
./pursuance -prod -domain YOURDOMAINNAMEGOESHERE.com -http :80 -https :443
```


## Conventions

Please follow these naming and spacing conventions when submitting a pull request:
[React + Redux Conventions](https://unbug.gitbooks.io/react-native-training/content/45_naming_convention.html).


## Code style and format

We use a combination of [Prettier](https://prettier.io/docs/en/index.html) and [Eslint](https://eslint.org/docs/user-guide/getting-started). Prettier is an opinionated code formatter but does not care about code-quality rules. It only concerns formatting rules. This is why we use Eslint for code-quality rules but not for formatting rules. Read more about the difference between linters and Prettier here: <https://prettier.io/docs/en/comparison.html>. Not ever do we want formatting rules in the `.eslintrc` configuration file. Not implicitly or explicitly. To make sure of that we have a NPM script called verify-eslint-rules (`npm run verify-eslint-rules`) that gives an error if there are Eslint rules somewhere in our `.eslintrc` configuration that conflicts with Prettiers formatting rules.

Before submitting PRs, please fix and format your code using `npm run lint`.


## NPM scripts

Besides from the script [generated by create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#available-scripts) (`npm start`, `npm test`, `npm run build` and `npm run eject`) we have several custom scripts as well:

- `lint` - Runs linting with the `--fix` flag AND formats the code with Prettier (**please run this against your code before submitting PRs**).
- `lint:check` - Just checks the code for lint errors (Eslint only).
- `format` - Automatically fixes the code to fit Prettiers format rules.
- `format:check` - Just checks the code for format errors (Prettier only).
- `ci` - The purpose of this script is to be executed in a CI platform for every pull request. It checks linting, code format and makes sure that there are not any Eslint rules that conflicts with Prettier format rule.
