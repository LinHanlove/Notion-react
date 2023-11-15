import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Upload, UploadFile, UploadProps, message } from "antd";
import ImgCrop from "antd-img-crop";
import { RcFile, UploadChangeParam } from "antd/es/upload";
import { useState } from "react";
import * as user from "@/service/user";
import { ResponseCode } from "@/utils";

export default function UploadAvatarModel(props: {
  isShow: boolean;
  userId: number | string;
  setShow: (e: boolean) => void;
  success: () => void;
}) {
  const { isShow, setShow, userId, success } = props;

  const [imageUrl, setImageUrl] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_APP_BASE_API;

  const [File, setFile] = useState<string | Blob | RcFile>();

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

  const handleUpload = async (file: any) => {
    try {
      const res = await user.uploadFile({
        file: file,
        id: userId as string,
      });
      if (res.code === ResponseCode.SUCCESS) {
        void setShow(false);
        void success();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="mt-2">上传头像</div>
    </div>
  );
  return (
    <Modal
      className="md:w-[40vw] w-[60vw] flex justify-center"
      title="修改头像"
      onCancel={() => setShow(false)}
      open={isShow}
      footer={[
        <div key="submit" className="w-full flex justify-center">
          <Button type="primary" onClick={() => handleUpload(File)}>
            上传
          </Button>
          ,
        </div>,
      ]}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[110px] h-[110px]flex justify-center [&>.ant-upload-picture-circle-wrapper]:w-auto">
          <ImgCrop rotationSlider>
            <Upload
              name="avatar"
              action=""
              accept="image/*"
              customRequest={(options) => {
                setFile(options.file);
              }}
              listType="picture-circle"
              className="avatar-uploader w-full h-full"
              onChange={onChange}
              beforeUpload={beforeUpload}
              showUploadList={false}
            >
              {imageUrl ? (
                <div className="w-[110px] h-[110px] rounded-full overflow-hidden">
                  <img src={imageUrl} alt="avatar" className="w-full h-full" />
                </div>
              ) : (
                uploadButton
              )}
            </Upload>
          </ImgCrop>
        </div>
      </div>
      <div className="text-sm text-[teal] my-2">
        一次最多上传1张图片，且每张图片不超过2M！
      </div>
    </Modal>
  );
}
