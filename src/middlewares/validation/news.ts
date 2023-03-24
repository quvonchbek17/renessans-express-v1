import Joi from "joi";

export const postNews = Joi.object().keys({
  title: Joi.string().required(),
  desc: Joi.string().required(),
  imgUrl: Joi.string().required(),
});

export const updateNews = Joi.object().keys({
  id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  title: Joi.string(),
  desc: Joi.string(),
  imgUrl: Joi.string()
});

export const deleteNews = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});
