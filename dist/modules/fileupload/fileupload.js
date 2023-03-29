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
exports.FileUpload = void 0;
const model_1 = __importDefault(require("./model"));
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class FileUpload {
    static GetFile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                fs_1.default.readFile(path_1.default.join(__dirname + "../../../uploads/" + name), (err, data) => {
                    if (err) {
                        res.status(200).json({
                            success: false,
                            message: "File not found !",
                        });
                    }
                    else {
                        res.sendFile(path_1.default.join(__dirname + "../../../uploads/" + name), function (err) {
                            if (err) {
                                next(err);
                            }
                            else {
                                next();
                            }
                        });
                    }
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static Upload(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { file } = req.files;
                let size = "";
                if (file) {
                    Math.floor(file.size / (1024 * 1024)) > 0 ? size = (file.size / (1024 * 1024)).toFixed(2) + " MB" : size = (file.size / 1024).toFixed(2) + " KB";
                }
                else {
                    res.status(400).json({
                        success: false,
                        message: "File yuklang !!"
                    });
                }
                let fileName = (0, uuid_1.v4)() + "." + file.name.split(".").at(-1);
                const newFile = new model_1.default({
                    name: file.name,
                    uploadName: fileName,
                    size: size,
                    type: file.mimetype,
                    url: "https://api-renessans.mquvonchbek.uz/api/v1/files/" + fileName
                });
                yield newFile.save();
                yield file.mv(path_1.default.join(__dirname + "../../../uploads/" + fileName), (err) => {
                    if (err)
                        throw err;
                });
                res.status(200).json({
                    success: true,
                    url: newFile.url
                });
            }
            catch (error) {
                console.log(error);
                next(error);
            }
        });
    }
    static DeleteFile(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield model_1.default.findOneAndDelete({ uploadName: fileName });
                fs_1.default.unlink(path_1.default.join(__dirname + "../../../uploads/" + fileName), (err) => {
                    if (err) {
                        throw err;
                    }
                });
                return "ok";
            }
            catch (error) {
                return ("error");
            }
        });
    }
}
exports.FileUpload = FileUpload;
