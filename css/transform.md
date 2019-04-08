# transform 变换  
默认围绕中心点，即transform-orgin
## css 样式  
1. translate(x,y) 偏移
2. scale(x,y) 缩放
3. rotate(θ) 旋转
4. skew(xθ,yθ)拉伸
## 原理  
matrix(a,b,c,d,e,f)  
矩阵：  
  a c e &nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;ax + cy + e  
  b d f · y  =  bx + by + f  
  0 0 1 &nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;0 + 0 + 1  
  
  ax + cy + e 变换后的横坐标  
  bx + by + f 变换后的纵坐标  
1. translate(30px,30px) = matrix(1,0,0,1,30,30);  
2. scale(x,y) = matrix(x,0,0,y,0,0);  
3. scale(θdeg) = matrix(cosθ,sinθ,sinθ,cosθ,0,0)  
4. skew(x + 'deg',y + 'deg') = matrix(1,tan x ,tan y,1,0,0)  
   