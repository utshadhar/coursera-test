(()=>{
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    names.forEach( name => {
      const f_letter = name.charAt(0).toLowerCase();
      if (f_letter!=='j'){ window.helloSpeaker.speak(name); }
      else { window.byeSpeaker.speak(name); }
    })
  })()