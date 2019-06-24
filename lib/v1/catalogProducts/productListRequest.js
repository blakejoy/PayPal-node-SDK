'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows details for a billing agreement, by ID.
 **/

class ProductListRequest {
    constructor() {
        this.path = '/v1/catalogs/products?';
        this.verb = 'GET';
        this.body = null;
        this.headers = {
            'Content-Type': 'application/json'
        };
    }
}

module.exports = {ProductListRequest: ProductListRequest};
