'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Re-activates a suspended billing agreement, by ID. In the JSON request body, include an `agreement_state_descriptor` object with with a note that describes the reason for the re-activation and the agreement amount and currency.
 **/

class ProductUpdateRequest {
    constructor(productId) {
        this.path = '/v1/catalogs/products/{product_id}?';
        this.path = this.path.replace(
            '{product_id}',
            querystring.escape(productId)
        );
        this.verb = 'PATCH';
        this.body = null;
        this.headers = {
            'Content-Type': 'application/json'
        };
    }

    requestBody(patchBody) {
        this.body = patchBody;
        return this;
    }
}

module.exports = {ProductUpdateRequest: ProductUpdateRequest};
