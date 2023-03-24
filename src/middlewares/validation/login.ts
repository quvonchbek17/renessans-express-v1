import Joi from "joi";

export const login = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required()
});

export const refresh = Joi.object().keys({
  refresh_token: Joi.string().required()
});
