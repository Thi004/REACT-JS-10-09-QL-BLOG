import { useState } from "react";
import { storage } from './firebaseConfig'; // Import Firebase storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AvatarUpload = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (image) {
            const imageRef = ref(storage, `avatars/${image.name}`);

            try {
                // Upload the file to Firebase Storage
                await uploadBytes(imageRef, image);

                // Get the URL of the uploaded image
                const downloadURL = await getDownloadURL(imageRef);
                setUrl(downloadURL);  // Lưu URL của ảnh vào state

                console.log('Upload successful. Image URL:', downloadURL);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div>
            <div className="mb-3">
                <input type="file" className="form-control" onChange={handleImageChange} accept="image/*" />
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleUpload}>Upload Avatar</button>
            </div>
            {url && (
                <div className="mt-3">
                    <img src={url} alt="Avatar" className="img-thumbnail" width="100" />
                </div>
            )}
        </div>
    );
};

export default AvatarUpload;