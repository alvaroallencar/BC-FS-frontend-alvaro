import { createAction } from "@reduxjs/toolkit";

export const createUser = createAction("user/create");
export const deleteUser = createAction("user/delete");
export const editUser = createAction("user/edit");
