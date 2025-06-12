// Fn xac nhan va chuyen type dau vao cua form input khi dung component trong map
export const confirmTypeInput = (key) => {
    switch (key) {
        case 'email':
            return 'email';
        case 'password':
        case 'confirm_password':    
            return 'password';

        default:
            return 'text';
    }
}