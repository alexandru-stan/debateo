export  function formatImage(base64encodedImage){
  let byteCharacters = atob(base64encodedImage);

        let byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
      
          let byteArray = new Uint8Array(byteNumbers);
         
          let blob = new Blob([byteArray], { type: 'image' });
         
          return URL.createObjectURL(blob);
        
     
}

