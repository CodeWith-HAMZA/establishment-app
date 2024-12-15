const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const { API_KEY, API_SECRET } = require('../constants/env');
const multer = require('multer');

// Configuration
cloudinary.config({ 
    cloud_name: 'dytjaaxbv', 
    api_key: API_KEY, 
    api_secret: API_SECRET  
});

// Configure Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'user_profiles', // Folder in Cloudinary
      allowed_formats: ['jpg', 'png', 'jpeg'], // Allowed image formats
    },
  });
  
  const upload = multer({ storage });
  
module.exports = upload;
  
  
 
// async function() {




    
//     // Upload an image
//      const uploadResult = await cloudinary.uploader
//        .upload(
//            'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
//                public_id: 'profileImages',
//            }
//        )
//        .catch((error) => {
//            console.log(error);
//        });
    
//     console.log(uploadResult);
    
//     // Optimize delivery by resizing and applying auto-format and auto-quality
//     const optimizeUrl = cloudinary.url('shoes', {
//         fetch_format: 'auto',
//         quality: 'auto'
//     });
    
//     console.log(optimizeUrl);
    
//     // Transform the image: auto-crop to square aspect_ratio
//     const autoCropUrl = cloudinary.url('shoes', {
//         crop: 'auto',
//         gravity: 'auto',
//         width: 500,
//         height: 500,
//     });
    
//     console.log(autoCropUrl);    
// }