# Backend Liên Hoa Zalo 365

Backend Node.js miễn phí, thiết kế để deploy trên một dịch vụ hosting Node.js miễn phí.

## Environment variables
- `ZALO_ACCESS_TOKEN`: secret, chỉ đặt ở hosting, KHÔNG commit vào GitHub.
- `ZALO_API_BASE`: mặc định `https://openapi.zalo.me`.
- `ZALO_GROUP_MEMBERS_PATH`: path API thành viên được Zalo cấp cho ứng dụng, ví dụ dạng `/.../:groupId/...` theo tài liệu/quyền thực tế của app.
- `PORT`: do hosting cung cấp.

## Endpoints
- `GET /health`
- `GET /api/zalo/groups/:groupId/members`

Backend không tự ý scrape Zalo. Endpoint thành viên là adapter: chuyển tiếp request tới API Zalo chính thức sau khi bạn được cấp đúng quyền và endpoint.

## Deploy miễn phí
Có thể deploy thư mục `backend` lên một nền tảng Node.js có free tier. Sau khi có URL HTTPS, nhập URL đó vào ô `Backend API URL` trong app GitHub Pages.
