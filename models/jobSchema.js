import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "Job title  must contain at least 3 character"],
        maxLength: [25, "Job title  cannot exceed 25 Character!"],
    },
    description: {
        type: String,
        required: [true, "Please provide a job description"],
        minLength: [3, "Job description must contain at least 50 character"],
        maxLength: [350, "Job description cannot exceed 350 Character!"],
    },
    category: {
        type: String,
        required: [true, "Job category is required!"],
    },
    country: {
        type: String,
        required: [true, "Job country is required!"],
    },
    city: {
        type: String,
        required: [true, "Job city is required!"],
    },
    location: {
        type: String,
        required: [true, "Please Provide exact loaction!"],
        minLength: [25, "Job loaction must contain at least 25 Characters!"],
    },
    fixedSalary:{
        type: Number,
        minLength: [4, "Fixed salary  must contain at least 4 digit!"],
        maxLength: [9, "Fixed salary cannot exceed 9 digits!"],
    },
    salaryFrom: {
        type: Number,
        minLength: [4, "salary  must contain at least 4 digit!"],
        maxLength: [9, "salary cannot exceed 9 digits!"],
    },
    salaryTo: {
        type: Number,
        minLength: [4, "salaryTo must contain at least 4 digit!"],
        maxLength: [9, "salaryTo cannot exceed 9 digits!"],
    },
    expired: {
        type:Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
});

export const Job = mongoose.model("Job",jobSchema);