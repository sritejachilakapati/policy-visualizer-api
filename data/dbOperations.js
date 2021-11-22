const config = require('../config');
const sql = require('mssql');
const queries = {
  getByPolicyId: require('./queries/getByPolicyId'),
  getByCustomerId: require('./queries/getByCustomerId'),
  getByRegion: require('./queries/getByRegion'),
  updatePremium: require('./queries/updatePremium')
}

const getPoliciesByPolicyId = async (policyId) => {
  try {
    let pool = await sql.connect(config.sql);
    let policiesList = await pool.request()
                             .input('policyId', sql.Int, policyId)
                             .query(queries.getByPolicyId);
    
    policiesList.recordset.forEach(policy => {
      policy.PREMIUM = policy.PREMIUM / 100;
    });
    return policiesList.recordset;
  }
  catch(err) {
    err.status = 500;
    throw err;
  }
}

const getPoliciesByCustomerId = async (customerId) => {
  try {
    let pool = await sql.connect(config.sql);
    let policiesList = await pool.request()
                             .input('customerId', sql.Int, customerId)
                             .query(queries.getByCustomerId);
    
    policiesList.recordset.forEach(policy => {
      policy.PREMIUM = policy.PREMIUM / 100;
    });
    return policiesList.recordset;
  }
  catch(err) {
    err.status = 500;
    throw err;
  }
}

const getPoliciesByRegion = async (region) => {
  try {
    let pool = await sql.connect(config.sql);
    let policiesList = await pool.request()
                             .input('region', sql.VarChar(10), region)
                             .query(queries.getByRegion);
    
    policiesList.recordset.forEach(policy => {
      policy.PREMIUM = policy.PREMIUM / 100;
    });
    return policiesList.recordset;
  }
  catch(err) {
    err.status = 500;
    console.log(err);
    throw err;
  }
}

const updatePremium = async (policyId, premium) => {
  try {
    let pool = await sql.connect(config.sql);
    await pool.request()
          .input('premium', sql.Int, premium*100)
          .input('policyId', sql.Int, policyId)
          .query(queries.updatePremium);
    
    return await getPoliciesByPolicyId(policyId);
  }
  catch(err) {
    err.status = 500;
    throw err;
  }
}

module.exports = {
  getPoliciesByPolicyId,
  getPoliciesByCustomerId,
  getPoliciesByRegion,
  updatePremium
}
