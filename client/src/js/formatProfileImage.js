export  function formatProfileImage(image){
    let byteCharacters = atob(image);
  
          let byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
        
            let byteArray = new Uint8Array(byteNumbers);
           
            let blob = new Blob([byteArray], { type: 'image' });
          
            return blob;
          
       
  }
  
  