from http.server import HTTPServer, SimpleHTTPRequestHandler

host = "0.0.0.0"
port = 6969

print(f"🦐 MiniKip server running at http://{host}:{port}")
print("close with Ctrl+C")

HTTPServer((host, port), SimpleHTTPRequestHandler).serve_forever()
