'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows details for a billing agreement, by ID.
 **/

class PlanGetRequest {
  constructor(planId) {
    this.path = '/v1/billing/plans/{plan_id}?';
    this.path = this.path.replace(
      '{plan_id}',
      querystring.escape(plan_id)
    );
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {PlanGetRequest: PlanGetRequest};
