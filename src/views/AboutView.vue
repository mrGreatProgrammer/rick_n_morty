<template>
  <div class="about">
    <h1>Hello, I am Somon Sodikov</h1>
    <a download="true" href="https://hh.ru/resume_converter/%D0%A1%D0%BE%D0%B4%D0%B8%D0%BA%D0%BE%D0%B2%20%D0%A1%D0%BE%D0%BC%D0%BE%D0%BD.pdf?hash=576597caff0bb874f80039ed1f584862767350&type=pdf&hhtmSource=resume&hhtmFrom=resume_list" class="resume-link">My CV</a>
  </div>
</template>

<style>
  .about {
    min-height: 100vh;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .resume-link{
    font-weight: 500;
    margin-top: 25px;
    padding: 4px 15px;
    border-radius: 4px;
    color: rgb(255, 152, 0);
    border: 1px solid rgb(255, 152, 0);
    transition: .2s;
    }
    .resume-link:hover,.resume-link:focus{
      background: rgb(255, 152, 0);
      color: #fff;
    }
</style>
