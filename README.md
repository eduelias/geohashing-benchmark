# Geohashing libraries benchmark tool

Tool to make it easy to benchmark nodejs geohashing libraries.

## Setting up and running

```bash
npm i

npm run build

npm run it
```

This will install the dependencies, transpile the typescript into javascript and run it using ESM.

---

## Adding new libraries

To add a new library to the benchmark just add a new TS file in the src/libs/ folder, parsing its encode/decode methods into the IHasheable interface. After that, register it into the libRegistry.ts inside the same folder.

This will add the new library into the benchmark queue and, next run, the new library will be included.
