// Fn kiem tra gia tri cua cac input ma nguoi dung nhap vao
export const validateInput = (type, value) => {
    if (!value) {
        return "This field is required.";
    }

    if (type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return "Invalid email address.";
        }
    }

    if (type === "password") {
        if (value.length < 6) {
            return "Password must be at least 6 characters.";
        }
    }
    return null;
};

