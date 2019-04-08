# Canvas 本地图片同源限制 
## 问题  
谷歌浏览器使用canvas读取本地文件,对图片像素级操作getImageData,会出现跨域错误  
错误提示：  
<font color=red size=10>Unable to get image data from canvas because the canvas has been tainted by cross-origin data</font>  
## 产生原因  
同源策略限制了不同源之间资源的交互  
同源：  
1. 协议相同  
2. 域名相同
3. 端口相同
4. 路径可不同  
## 解决方案  
1. 使用火狐浏览器
2. 使用node开启本地静态服务器  
   - npm install http-server -g
   - 进入项目根目录 http-server -p [端口]
3. nginx(未测试)  

# nginx 知识拓展  
1. nginx 是一个高性能的HTTP和反向代理服务器,也是一个通用的TCP/UDP代理服务器  
2. 代理：在服务器和客户端的一层中间服务器，接收客户端的请求和服务端的返回并转发  
   * 正向代理，客户端可访问本身无法访问的服务器资源，对服务端非透明，即服务器不知道是真实客户端还是代理  
   * 反向代理，为服务器接收请求，可用于负载均衡，对客户端非透明，即客户端不知道是访问的原始服务器还是代理  
3. 配置详解，参考<http://www.nginx.cn/76.html>
4. 简单例子  
   ```
   add_header Access-Control-Allow-Origin *;
   add_header Access-Control-Allow-Headers X-Requested-With;
   add_header Access-Control-Allow-Methods GET,POST,OPTIONS;
   server{
     lsiten   80;
     server_name  requestServer;
     location / {
       proxy_pass cors2URL;
     }
   }
   ```