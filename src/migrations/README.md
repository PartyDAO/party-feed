# Migrations

===

Migration files for redis

### Usage

Make sure the `up()` or `down()` function that you want to run is uncommented, and then run the following command:

```sh
# command
$ ./node_modules/.bin/tsc && node ./transpiled/migrations/MIGRATION_FILE.js

# example
$ ./node_modules/.bin/tsc && node ./transpiled/migrations/20220218021400_update_party_first_contribution.js
```
