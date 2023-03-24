"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const publicationSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String
    },
    imgUrl: {
        type: String
    },
    fileUrl: {
        type: String
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    }
}, {
    collection: "publications"
});
exports.default = (0, mongoose_1.model)("Publications", publicationSchema);
