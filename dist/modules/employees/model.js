"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const employeSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    position: {
        type: String
    },
    degree: {
        type: String
    },
    university: {
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
    collection: "employees"
});
exports.default = (0, mongoose_1.model)("Employees", employeSchema);
