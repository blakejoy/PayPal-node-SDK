'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows details for a billing agreement, by ID.
 **/

class ProductGetRequest {
    constructor(productId) {
        this.path = '/v1/catalogs/products/{product_id}';
        this.path = this.path.replace(
            '{product_id}',
            querystring.escape(productId)
        );
        this.verb = 'GET';
        this.body = null;
        this.headers = {
            'Content-Type': 'application/json'
        };
    }
}

module.exports = {ProductGetRequest: ProductGetRequest};
