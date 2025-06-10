
### Đề tài: Quản lý task outsourcing cho công ty
# Lớp: DF-FIT-2D002_Tên: Trần Văn Vủ Luân

# Lý do tại sao chọn đề tài:
#   Tính thực tiễn:
        Trong lĩnh vực phần mềm, nhiều công ty nhận dự án outsourcing từ các khách hàng trong và ngoài nước. Việc theo dõi tiến độ, phân chia công việc và phối hợp giữa các bộ phận là yếu tố then chốt để đảm bảo chất lượng và tiến độ.
#   Phù hợp với khóa học:
        React + React Bootstrap:
            Thiết kế giao diện người dùng (UI) trực quan, responsive, hiện đại;
            Tạo các component giao diện quản lý như bảng task, form nhập liệu, phân trang, lọc dữ liệu.
        PHP & MySQL:
            Xử lý logic, CRUD dữ liệu;
            Thiết kế và tối ưu database phù hợp với mô hình task, dự án, người dùng.
        Laravel:
            Xây dựng hệ thống backend;
            Quản lý phân quyền đa vai trò (Admin, PM, Staff, Client) bằng middleware và policies;
            Thao tác với MySQL để lưu trữ dữ liệu dự án, task, user một cách hiệu quả;
            Xây dựng API Restful để phục vụ frontend (nếu tách riêng).
        Git:
            Quản lý phiên bản code, hỗ trợ làm việc nhóm.
#   Khả năng mở rộng và phát triển:
        Hệ thống có thể được phát triển thêm như: tính năng quản lý thời gian, báo cáo hiệu suất nhân viên, tích hợp với hệ thống chat, hoặc triển khai dạng SaaS.

# Chức năng chính của hệ thống:
    Dashboard thống kê: Hiển thị số lượng task theo trạng thái, biểu đồ tiến độ dự án.
    Quản lý tài khoản người dùng: CRUD user, phân quyền theo vai trò (Admin, Leader, Member, Client).
    Quản lý dự án: CRUD dự án, thống kê tiến độ, gán nhóm phụ trách.
    Quản lý task: CRUD task, phân loại (Bug, Feature, Improvement,...), gán người phụ trách, quản lý trạng thái (Waiting Confirm, In Progress, Review, Done), thiết lập deadline.
    Trao đổi trong task: Cho phép bình luận, đính kèm tệp trong mỗi task.
