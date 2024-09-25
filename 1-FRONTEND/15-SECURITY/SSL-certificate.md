##### SSL certificate

##### (1) 生成 SSL 的 CSR

- 1
- [SAN]
- Subject Alternative Name
- 主题备用名称
  - SAN 是 SSL 证书中的一个扩展，允许证书用于多个域名
  - 个证书可以同时用于 www.example.com 和 example.com
- 2
- [CN]
- Common Name
- 通用名称
  - CN 是证书中的一个字段，通常是证书的主要域名

##### (1.1) 生成 SSL 的 CSR 方式一 / 不用配置文件

```java 1. 生成SSL的CSR 方式一 不用配置文件
生成SSL的CSR 1
-

1. sudo apt-get install openssl
2. brew install openssl

3.
生成私钥
- openssl genpkey -algorithm RSA -out private.key -pkeyopt rsa_keygen_bits:2048
- 该命令将生成 ( private.key ) 在 ( 当前文件夹 ) 下

4.
openssl req -new -key private.key -out certificate.csr
生成CSR
- Country Name (2 letter code) [AU]: 输入你的国家代码，例如CN（中国）。 -------------------- HK
- State or Province Name (full name) [Some-State]: 输入你所在的州或省。------------------ HONG KONG ISLAND
- Locality Name (eg, city) []: 输入你所在的城市。 --------------------------------------- ADMIRALTY
- Organization Name (eg, company) [Internet Widgits Pty Ltd]: 输入你的组织名称。--------- Cathay Pacific Airways Limited
- Organizational Unit Name (eg, section) []: 输入你的组织单位名称（可选）。----------------- Information Management - 1022|0895
- Common Name (e.g. server FQDN or YOUR name) []: 输入你的域名，例如www.example.com。 --- benefits.ete.cathaypacific.com
- Email Address []: 输入你的电子邮件地址。----------------------------------------------- imtskl@cathaypacific.com
- A challenge password []: 输入一个挑战密码（可选）。
- An optional company name []: 输入一个可选的公司名称（可选）。
```

##### (1.2) 生成 SSL 的 CSR 方式二 / 配置文件

```java 2. 生成SSL的CSR 方式二 配置文件
2.1
openssl.cnf
-
[ req ]
default_bits       = 2048
default_md         = sha256
default_keyfile    = private.key
distinguished_name = req_distinguished_name
req_extensions     = req_ext

[ req_distinguished_name ]
countryName                 = Country Name (2 letter code)
stateOrProvinceName         = State or Province Name (full name)
localityName               = Locality Name (eg, city)
organizationName           = Organization Name (eg, company)
commonName                 = Common Name (e.g. server FQDN or YOUR name)

[ req_ext ]
subjectAltName = @alt_names

[ alt_names ]
DNS.1   = www.example.com
DNS.2   = example.com



2.2
openssl req -new -key private.key -out certificate.csr -config openssl.cnf
```
