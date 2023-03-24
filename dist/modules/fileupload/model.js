"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const filesSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    uploadName: {
        type: String
    },
    url: {
        type: String
    },
    size: {
        type: String
    },
    type: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    }
}, {
    collection: "files"
});
exports.default = (0, mongoose_1.model)("Files", filesSchema);
