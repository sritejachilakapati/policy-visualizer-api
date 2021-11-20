module.exports = `
UPDATE dbo.POLICY_DETAILS
SET PREMIUM = @premium
WHERE POLICY_ID = @policyId`
