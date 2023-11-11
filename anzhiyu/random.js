var posts=["2023/11/07/TEST-PAGE/","2023/11/06/Triode域/","2023/11/11/深大Aurora第一批入队赛WP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };