/* eslint-disable no-useless-escape */
export const emailValidation = new RegExp(
  /^[-a-z0-9#$%^&'`?{}_=+\/}{\'?]+(\.[-a-z0-9#$%^&'`?{}_=+\/}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(biz|com|info|net|org|ru|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
);

