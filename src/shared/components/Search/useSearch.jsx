import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
import axios from "axios";
import handleRequestError from "../../utils/handleError";

const useSearch = ({ setVehicleInfo }) => {
  const [form] = Form.useForm();
  const [initialValue] = useState({
    vinNumber: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = form.getFieldsValue();

    if (data.vinNumber) {
      const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValues/${data.vinNumber}?format=json`;
      try {
        let response = await axios.get(url);
        setVehicleInfo(response.data);
        console.log(response.data, "response.data");
        if (response.data?.Results[0]?.ErrorCode !== "0") {
          handleRequestError(
            response.data?.Results[0]?.ErrorText,
            response.data?.Results[0]?.ErrorCode
          );
        } else {
          navigate("/details");
        }
        
      } catch (error) {
        console.log(error, "error fetching search data");
      }
    }
  };

  const onFinish = async () => {
    form
      .validateFields()
      .then(() => {
        handleSubmit()
      })
      .catch((err) => {
        console.log("validation error", err);
      });
  };

  return {
    initialValue,
    form,
    onFinish
  };
}

export default useSearch;