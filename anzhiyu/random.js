var posts=["2023/11/07/TEST-PAGE/","2023/11/06/Triode域/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };