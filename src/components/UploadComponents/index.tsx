import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload, UploadFile, UploadProps, message } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile, UploadChangeParam } from "antd/es/upload";
import { useState } from "react";

export default function UploadComponents(props: {
  title: string;
  success: (file: any) => void;
}) {
  const { title, success } = props;

  const [imageUrl, setImageUrl] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_APP_BASE_API;

  /** 转成base64格式 */
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  /**格式检测 */
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("主儿！ 我只要png,jpg图片哦❀");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("图片文件太大啦！重新选");
    }
    return isJpgOrPng && isLt2M;
  };

  /**上传 */
  const onChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    console.log(info, baseUrl);
    getBase64(info.file.originFileObj as RcFile, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="mt-2">{title}</div>
    </div>
  );
  return (
    <div>
      <ImgCrop rotationSlider>
        <Upload
          name="avatar"
          action=""
          accept="image/*"
          customRequest={(options) => {
            success(options.file);
          }}
          listType="picture-card"
          className="avatar-uploader w-full h-full"
          onChange={onChange}
          beforeUpload={beforeUpload}
          showUploadList={false}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" className="w-full h-full" />
          ) : (
            uploadButton
          )}
        </Upload>
      </ImgCrop>
      <div className="text-sm text-[teal] my-2">
        一次最多上传1张图片，且每张图片不超过2M！
      </div>
    </div>
  );
}
