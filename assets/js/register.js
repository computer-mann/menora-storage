(function(window, document, $, undefined){

      const registerForm = document.getElementById('registerForm')
        registerForm.addEventListener('submit', function(e){
             // alert("test");
            e.preventDefault();

            const formData = new FormData(this);

            fetch('http://menorahltd.herokuapp.com/auth', {
                method: 'POST',
                body: formData
            }).then(function(response){
               if(response.status !== 200){
                  alert('Email or Password is Incorrect');
                  console.log(response)
                  return;
               }
            
            localStorage.setItem('uid',response.headers.get('Uid'));
            localStorage.setItem('client',response.headers.get('Client'));
            localStorage.setItem('at',response.headers.get('Access-Token'))
           
               response.json().then(data=>console.log(data));
               window.location.href="home.html";
               console.log(`Access-Token -- ${response.headers.get('Access-Token')}`);
            console.log(`uid = ${response.headers.get('Uid')}`);
            console.log(`client = ${response.headers.get('Client')}`);
            }).catch(function(error){
                console.error(error);
                
            });
        });    
          
        

})(window, document, window.jQuery);