"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newsSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String
    },
    imgUrl: {
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
    collection: "news"
});
exports.default = (0, mongoose_1.model)("News", newsSchema);
