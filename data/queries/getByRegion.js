module.exports = `
  SELECT 
  MONTH(DATE_OF_PURCHASE) AS MONTH,
  COUNT(*) AS COUNT
  FROM POLICY_DETAILS P
  INNER JOIN CUSTOMER_DETAILS C
  ON C.REGION = @region
  AND C.CUSTOMER_ID = P.CUSTOMER_ID 
  GROUP BY MONTH(DATE_OF_PURCHASE)`
