var posts=["2023/11/11/深大Aurora第一批入队赛WP/","2023/11/17/Triode的RSA学习笔记（1）/","2023/12/15/Anshel–Anshel–Goldfeld-密钥交换体系-Anshel–Anshel–Goldfeld-key-exchange/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };