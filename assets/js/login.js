 (function(window, document, $, undefined){

    $(function(){
               
        jQuery(".loader").fadeOut('slow');
    });

})(window, document, window.jQuery);



(function(window, document, $, undefined){

      const loginForm = document.getElementById('loginForm')
        loginForm.addEventListener('submit', function(e){
             // alert("test");
            e.preventDefault();

            const formData = new FormData(this);

            fetch('http://menorahltd.herokuapp.com/auth/sign_in', {
                method: 'POST',
                body: formData
            }).then(function(response){
               if(response.status !== 200){
                  alert('Email or Password is Incorrect');
                  console.log(response)
                  return;
               }
            console.log(`Access-Token -- ${response.headers.get('Access-Token')}`);
            console.log(`uid = ${response.headers.get('Uid')}`);
            console.log(`client = ${response.headers.get('Client')}`);
            localStorage.setItem('uid',response.headers.get('Uid'));
            localStorage.setItem('client',response.headers.get('Client'));
            localStorage.setItem('at',response.headers.get('Access-Token'))
           
               response.json().then(data=>console.log(data));
               window.location.href="home.html";
            }).catch(function(error){
                console.error(error);
                
            });
        });    
          
        

})(window, document, window.jQuery);

       