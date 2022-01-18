const handleProfileUpload = (event) => {
    // setProfilePic(event.target.files?.length ? event.target.files[0] : null);
    let imgUrl = URL.createObjectURL(
      event.target.files?.length ? event.target.files[0] : new Blob()
    );
    // setPreviewImg(imgUrl);
};