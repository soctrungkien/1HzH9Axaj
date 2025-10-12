import os
import subprocess
import requests
import http.server
import socketserver
import sys
import socket

# ensure utf-8 output
try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

# ==== Config ====
USERNAME = "soctrungkien"   # đổi username
DESIRED_PORT = 80      # cố gắng bind port này trước
HOST = "0.0.0.0"       # 0.0.0.0 để accept từ bên ngoài; dùng "127.0.0.1" nếu chỉ local
# =================

# Tạo folder
if not os.path.exists(USERNAME):
    os.makedirs(USERNAME)

# Lấy list repos từ GitHub
url = f"https://api.github.com/users/{USERNAME}/repos?per_page=200"
resp = requests.get(url)
repos = resp.json()

if isinstance(repos, dict) and repos.get("message"):
    print("❌ Lỗi GitHub API:", repos.get("message"))
    sys.exit(1)

print(f"🔎 Tìm thấy {len(repos)} repo của {USERNAME}")

for repo in repos:
    repo_name = repo["name"]
    clone_url = repo["clone_url"]
    repo_path = os.path.join(USERNAME, repo_name)
    if os.path.exists(repo_path):
        print(f"⚡ {repo_name} đã tồn tại — bỏ qua")
    else:
        print(f"⬇️ Clone {repo_name} ...")
        subprocess.run(["git", "clone", clone_url, repo_path], check=False)

# Thay đổi thư mục và start HTTP server
os.chdir(USERNAME)

def start_server(host, port):
    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer((host, port), handler) as httpd:
        print(f"🌍 Hosting thư mục '{USERNAME}' tại http://{host if host!='0.0.0.0' else '<your-ip>'}:{port}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("✋ Server đóng lại")

# Thử bind port mong muốn, nếu lỗi thì dùng 8080
port = DESIRED_PORT
try:
    # test if port is available by trying to bind a temporary socket
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((HOST, port))
    s.close()
    start_server(HOST, port)
except PermissionError:
    print(f"⚠️ Không có quyền bind port {port}. Thử port 8080.")
    port = 8080
    start_server(HOST, port)
except OSError as e:
    print(f"⚠️ Port {port} không khả dụng ({e}). Thử port 8080.")
    port = 8080
    start_server(HOST, port)
