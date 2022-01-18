
export function UpdateProfilePic(): JSX.Element | null {
  
  const [profilePic, setProfilePic] = useState<File | null>();

  // REF and Preview Image state
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [previewImg, setPreviewImg] = useState<string>();

  const handleProfileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfilePic(event.target.files?.length ? event.target.files[0] : null);
    let imgUrl = URL.createObjectURL(
      event.target.files?.length ? event.target.files[0] : new Blob()
    );
    setPreviewImg(imgUrl);
  };

  return (
    <div className="form-group mt-2 text-center">
        <div className="profile-image-container">
            <div
            className="image-hover"
            onClick={() => inputFile?.current?.click()}
            >
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="form-control-file"
                onChange={handleProfileUpload}
                ref={inputFile}
                style={{ display: 'none' }}
            />
            <div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
                >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                </svg>
            </div>
            </div>

            <img
            src={previewImg ? previewImg : userProfile}
            alt="profile"
            className="img-fluid"
            />
        </div>
    </div>
  );
}
