"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.News = void 0;
const model_1 = __importDefault(require("./model"));
const errorHandler_1 = require("../../errors/errorHandler");
const fileupload_1 = require("../fileupload/fileupload");
class News {
    static Get(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({
                success: true,
                data: yield model_1.default.find()
            });
        });
    }
    static Post(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, desc, imgUrl } = req.body;
            const news = new model_1.default({
                title, desc, imgUrl
            });
            news.save();
            res.status(200).json({
                success: true,
                data: news
            });
        });
    }
    static Update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, title, desc, imgUrl } = req.body;
            const updated = yield model_1.default.findOneAndUpdate({ _id: id }, {
                $set: {
                    title,
                    desc,
                    imgUrl,
                    updated_at: new Date()
                }
            }).
                catch((err) => next(new errorHandler_1.ErrorHandler(err.message, 503)));
            if (updated) {
                updated.save();
                const [newData] = yield model_1.default.find({ _id: id });
                res.status(200).json({
                    success: true,
                    data: newData
                });
            }
            else {
                res.status(404).json({
                    success: false,
                    message: "Yangilik topilmadi"
                });
            }
        });
    }
    static Delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deleted = yield model_1.default.findByIdAndDelete({ _id: id })
                .catch((err) => next(new errorHandler_1.ErrorHandler(err.message, 503)));
            if (deleted) {
                let fileName = (deleted.imgUrl || "").split("/").at(-1);
                console.log(deleted);
                console.log(fileName);
                yield fileupload_1.FileUpload.DeleteFile(fileName || "");
                res.status(200).json({
                    success: true,
                    data: deleted
                });
            }
            else {
                res.status(404).json({
                    success: false,
                    message: "Yangilik topilmadi"
                });
            }
        });
    }
}
exports.News = News;
