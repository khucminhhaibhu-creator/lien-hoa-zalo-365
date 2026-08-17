# Liên Hoa Zalo 365 — Cloudflare Worker

Backend adapter chạy trên Cloudflare Workers.

## Deploy
1. Đăng nhập Cloudflare.
2. Workers & Pages → Create application → Worker.
3. Có thể dùng Wrangler/Cloudflare dashboard để deploy thư mục `worker`.
4. Sau khi deploy, lấy URL `https://<worker>.<subdomain>.workers.dev`.
5. Nhập URL đó vào `Backend API URL` trong Liên Hoa Zalo 365.

## Secrets
Tạo Worker secret `ZALO_ACCESS_TOKEN` trên Cloudflare, không commit token vào GitHub.

Tạo variable `ZALO_GROUP_MEMBERS_PATH` theo endpoint và quyền GMF/API thực tế được Zalo cấp. Worker không tự scraping Zalo.

## Endpoints
`GET /health`
`GET /api/zalo/groups/:groupId/members`
