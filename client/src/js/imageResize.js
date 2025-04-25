import Pica from 'pica';

function imageResize(img, maxWidth, maxHeight) {
  return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      let width = img.width;
      let height = img.height;

      // Resize proportionally  
      if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
              height = (height * maxWidth) / width;
              width = maxWidth;
          } else {
              width = (width * maxHeight) / height;
              height = maxHeight;
          }
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      // Convert canvas to Blob
      canvas.toBlob(
          (blob) => {
              if (blob) {
                  resolve(blob); // Resolve the promise with the Blob
              } else {
                  reject(new Error("Blob creation failed"));
              }
          },
          "image/jpeg", // Format
          0.8 // Quality (0.0 to 1.0)
      );
  });
}





export default imageResize;
