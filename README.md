# false-positive-sieve

JSON sieve
## Install

```
yarn install
```

## See Example Output

```
yarn example
```

## Build

```
yarn build
```

## Usage

### read from file
```sh
# when you use 'yarn start', you need to run 'yarn build' first.
yarn start --json JSON_FILE_PATH

# or
yarn dev --json JSON_FILE_PATH
```

### ... or read from stdin

```sh
cat JSON_FILE_PATH | yarn start

# or
cat JSON_FILE_PATH | yarn dev
```

## Test

```
yarn test
```

### TIPS: csv to json

```sh
# just use csvtojson (it is a 3rd party lib)
npx csvtojson CSV_FILE_PATH
```
