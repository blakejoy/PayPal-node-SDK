'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Re-activates a suspended billing agreement, by ID. In the JSON request body, include an `agreement_state_descriptor` object with with a note that describes the reason for the re-activation and the agreement amount and currency.
 **/

class PlanUpdateRequest {
  constructor(planId) {
    this.path = '/v1/billing/plans/{plan_id}?';
    this.path = this.path.replace(
      '{plan_id}',
      querystring.escape(planId)
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

module.exports = {PlanUpdateRequest: PlanUpdateRequest};
