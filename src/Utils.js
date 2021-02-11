export class Utils {
    constructor() {}

    getNameRules() {
        return [
            (v) => !!v || "Name is required",
            (v) => v.length >= 2 || "Minimum length is 2 characters",
          ]
    }

    getEmailRules() {
        return [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
          ]
    }

    getPasswordRules() {
        return [
            (v) => !!v || "Password is required",
            (v) =>
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(v) || "Minimum 6 characters, at least one uppercase letter, one lowercase letter and one number",
          ]
    }

    getDateStartRules() {
        return [(v) => !!v || "Date is required"]
    }
}