import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [image, setImage] = useState<File>();

  const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const img: File = e.target.files[0];
    setImage(img);
  };

  const submitImage = () => {
    const header = {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };
    //const data = new FormData();
    //data.append("file", image!);
    const imgUri = "http://localhost/upload";
    axios
      .post(imgUri, image!, header)
      .then(res => {
        //任意の処理
      })
      .catch(err => {
        //任意の処理
      });
  };
  return (
    <div>
      <form>
        　<label htmlFor="img">画像</label>
        　
        <input
          id="img"
          type="file"
          accept="image/*,.png,.jpg,.jpeg,.gif"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => getImage(e)}
        />
        　<input type="button" value="保存" onClick={submitImage} />
      </form>
    </div>
  );
};

export default Upload;
