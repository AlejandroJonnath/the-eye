import qrcode

data = "https://yudfs6-ip-157-100-138-202.tunnelmole.net"
qr = qrcode.make(data)
qr.save("c:/Users/Usuario-PC/Desktop/the-eye/server/models/backend/pagina.png")