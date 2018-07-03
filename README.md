# DADI Publish development

> Sample API + Publish installation for development purposes

## Installation

1. Install API

    ```shell
    cd api
    npm install
    ```

1. Install Publish

    ```shell
    cd publish
    npm install
    ```

## Usage

1. Run both web services

    ```shell
    ## Run API
    cd api && npm start

    # Run Publish
    cd publish && npm start
    ```

1. Access Publish on http://127.0.0.1:3001

1. Access API on http://127.0.0.1:9999. The following user is created by default:

    ```json
    {
      "clientId": "api-client",
      "secret": "client-secret",
      "accessType": "admin"
    }
    ```
