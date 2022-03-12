import { RootState } from "@core/store";
import { createSelector } from "@reduxjs/toolkit";

export const getStatusSendMail = createSelector(
  (state: RootState) => state.auth.sendMail,
  (sendMail) => sendMail
);

export const getInputError = createSelector(
  (state: RootState) => state.auth.inputError,
  (inputError) => inputError
);

export const getStatusResetPwd = createSelector(
  (state: RootState) => state.auth.resetPwd,
  (resetPwd) => resetPwd
);
export const getStatusStatusTokenResetPwd = createSelector(
  (state: RootState) => state.auth.checkStatusToken,
  (checkStatusToken) => checkStatusToken
);
export const getIsLoading = createSelector(
  (state: RootState) => state.auth.isLoading,
  (isLoading) => isLoading
);
