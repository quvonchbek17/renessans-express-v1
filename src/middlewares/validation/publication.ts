import Joi from "joi";

export const postPublication = Joi.object().keys({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  imgUrl: Joi.string(),
  fileUrl: Joi.string()
});

export const updatePublication = Joi.object().keys({
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  name: Joi.string(),
  desc: Joi.string(),
  imgUrl: Joi.string(),
  fileUrl: Joi.string()
});

export const deletePublication = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});
