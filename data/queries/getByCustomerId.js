module.exports = `
  SELECT
  P.POLICY_ID,
  P.DATE_OF_PURCHASE,
  P.CUSTOMER_ID,
  V.FUEL,
  V.SEGMENT,
  P.PREMIUM,
  B.BODILY_INJURY_LIABILITY,
  B.PERSONAL_INJURY_PROTECTION,
  B.PROPERTY_DAMAGE_LIABILITY,
  B.COLLISION,
  B.COMPREHENSIVE,
  C.GENDER,
  P.INCOME_GROUP,
  C.REGION,
  P.MARITAL_STATUS
  FROM dbo.CUSTOMER_DETAILS C
  INNER JOIN dbo.POLICY_DETAILS P ON P.CUSTOMER_ID = C.CUSTOMER_ID
  AND C.CUSTOMER_ID = @customerID
  INNER JOIN dbo.BENEFIT_DETAILS B ON P.POLICY_ID = B.POLICY_ID 
  INNER JOIN dbo.VEHICLE_DETAILS V ON V.VEHICLE_ID = P.VEHICLE_ID`
