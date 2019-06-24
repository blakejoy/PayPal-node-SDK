'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Shows details for a billing agreement, by ID.
 **/

class PlanGetListRequest {
  constructor(planId) {
    this.path = '/v1/billing/plans?';
    this.verb = 'GET';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }
}

module.exports = {PlanGetListRequest: PlanGetListRequest};
