import Joi from "joi";

export const postEmployee = Joi.object().keys({
  fullname: Joi.string().required(),
  position: Joi.string().required(),
  degree: Joi.string(),
  university: Joi.string(),
  imgUrl: Joi.string()
});

export const updateEmployee = Joi.object().keys({
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  fullname: Joi.string(),
  position: Joi.string(),
  degree: Joi.string(),
  university: Joi.string(),
  imgUrl: Joi.string()
});

export const deleteEmployee = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});