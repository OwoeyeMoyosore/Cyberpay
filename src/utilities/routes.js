

export const route = {
    login: "/",
    fPassword: "/forgotpassword",
    reset: "/resetpassword",
    fEmail: "/checkemail",
    fError: "/emailerror",
    rSuccess: "/resetsuccess",
    rFailed: "/reset-failed",
    hrBoard : "/hr-dashboard",
    settlement : "/settlement",
    settlement2 : "/process-settlement",
    bankStatement: "/bank-statement",
    notification: "/notification",
    transaction:"/transaction",
    settlementSuccess : "/settlement-success",
    settlementTracker : "/settlement-tracker",
    transaction2 : "/transaction-filter"
    // statement :""

  };
  
  export const authRoutes = [
    route.login,
    route.fPassword,
    route.reset,
    route.fEmail,
    route.fError,
    route.rSuccess,
    route.rFailed,
  ];

  export const boardRoutes = [
    route.hrBoard, route.settlement,route.settlement2, route.bankStatement, route.notification, route.transaction, route.settlementSuccess, route.settlementTracker, route.transaction2
  ]