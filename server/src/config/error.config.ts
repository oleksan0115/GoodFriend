import { ErorrResult } from "../types/error.types"

// Duplicate //

const emailDuplicateError: ErorrResult = {
    code: 1000,
    message: "The email is a duplicate."
}

export {emailDuplicateError}