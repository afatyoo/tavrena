from flask import Flask, jsonify, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")


@app.get("/")
def index():
    return send_from_directory(".", "index.html")


@app.get("/api/health")
def health():
    return jsonify(status="success", message="Tavrena API berjalan")


# TODO: endpoint /api/auth, /api/tickets, /api/messages, /api/users

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
