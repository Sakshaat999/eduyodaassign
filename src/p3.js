Vue.component('skill', {
    props: ["title", "logo", "level"],
    template: '#skills_template',
    
  })
    
  const vm  = new Vue({
    el: '#app',
    data: { 
      skills: [
        {title: "HTML5", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png", level: 90},
        {title: "CSS", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1000px-CSS.3.svg.png", level: 85},
        {title: "Flask", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/220px-Sass_Logo_Color.svg.png", level: 80},
        {title: "JavaScript", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png", level: 80}, 
       {title: "Python", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/200px-Python-logo-notext.svg.png", level: 80},
       
       
      
      ]
    },
  })