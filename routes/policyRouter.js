const express = require('express');
const dbOperations = require('../data/dbOperations');
const policyRouter = express.Router();

policyRouter.route('/policy/:filter')
.get(async (req, res) => {
  try {
    if(req.query.filterBy === 'policy') {
      let policyId = parseInt(req.params.filter);
      let policyList = await dbOperations.getPoliciesByPolicyId(policyId);
      res.json(policyList);
    }
    else if(req.query.filterBy === 'customer') {
      let customerId = parseInt(req.params.filter);
      let policyList = await dbOperations.getPoliciesByCustomerId(customerId);
      res.json(policyList);
    }
    else if(req.query.filterBy === 'region') {
      let region = req.params.filter;
      let policyList = await dbOperations.getPoliciesByRegion(region);
      res.json(policyList);
    }
    else {
      let err = new Error('The query parameter \'filterBy\' is either missing or invalid');
      err.status = 400;
      throw err;
    }
  }
  catch(err) {
    res.status(err.status || 400).send(err.status !== 500 ? err.message : 'Something is wrong. Please try again later');
  }
})
.post((req, res) => {
  res.sendStatus(501);
})
.put(async (req, res) => {
  try {
    let policyId = parseInt(req.params.filter);
    let premium = parseInt(req.body.premium);
    if (isNaN(premium)) {
      let err = new Error('Premium must be a number');
      err.status = 400;
      throw err;
    }
    if(premium > 1000000) {
      let err = new Error('Premium must be less than 1 million');
      err.status = 400;
      throw err;
    }
    else {
      let updatedPolicy = await dbOperations.updatePremium(policyId, premium);
      res.json(updatedPolicy);
    }
  }
  catch(err) {
    res.status(err.status || 400).send(err.status !== 500 ? err.message : 'Something is wrong. Please try again later');
  }
})
.delete((req, res) => {
  res.sendStatus(501);
});

module.exports = policyRouter;
