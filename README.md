# spacetraders-fetch-api

A TypeScript/JavaScript [Fetch API](https://fetch.spec.whatwg.org/) client for [SpaceTraders v2](https://spacetraders.io/).

This package was generated using [OpenAPI Generator](https://openapi-generator.tech/docs/generators/typescript-fetch).

## Installing

```
npm install spacetraders-fetch-api
```

## Versioning

For now, the versioning of this package is date-based, to work along with the [regular changes](https://docs.spacetraders.io/resources/changelog) that are happening to the REST API.

## Building

To build and compile the TypeScript sources to JavaScript use:

```
npm install
npm run build
```

## Regenerating

```
openapi-generator generate \
 -i https://stoplight.io/api/v1/projects/spacetraders/spacetraders/nodes/reference/SpaceTraders.json\?fromExportButton\=true\&snapshotType\=http_service\&deref\=optimizedBundle \
 -g typescript-fetch \
 --additional-properties=npmName="spacetraders-fetch-api" \
 --additional-properties=supportsES6=true \
 --additional-properties=stringEnums=true \
 --skip-validate-spec
```

Note: We're skipping validating the spec (i.e. `--skip-validate-spec`) since there is a validation issue. Ideally, this would not be required.
