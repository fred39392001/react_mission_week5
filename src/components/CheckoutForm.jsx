import { useForm } from "react-hook-form";

function CheckoutForm() {
  // 使用 react-hook-form 來驗證表單
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("送出的表單資料：", data);
    alert("訂單已提交！");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">結帳資訊</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="col-md-6">
        {/* 收件人姓名 */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">收件人姓名</label>
          <input
            id="name"
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            placeholder="請輸入姓名"
            {...register("name", { required: "請輸入收件人姓名。" })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="請輸入 Email"
            {...register("email", {
              required: "請輸入 Email。",
              pattern: { value: /^\S+@\S+$/i, message: "Email 格式不正確。" },
            })}
          />
          {errors.email && <p className="text-danger">{errors.email.message}</p>}
        </div>

        {/* 收件人電話 */}
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">收件人電話</label>
          <input
            id="tel"
            type="tel"
            className={`form-control ${errors.tel ? "is-invalid" : ""}`}
            placeholder="請輸入電話"
            {...register("tel", {
              required: "請輸入收件人電話。",
              pattern: {
                value: /^(0[2-8]\d{7}|09\d{8})$/,
                message: "電話號碼格式不正確，請輸入正確的台灣號碼。",
              },
            })}
          />
          {errors.tel && <p className="text-danger">{errors.tel.message}</p>}
        </div>

        {/* 收件地址 */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">收件人地址</label>
          <input
            id="address"
            type="text"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            placeholder="請輸入地址"
            {...register("address", { required: "請輸入收件人地址。" })}
          />
          {errors.address && <p className="text-danger">{errors.address.message}</p>}
        </div>

        {/* 訂單留言 */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">留言</label>
          <textarea
            id="message"
            className="form-control"
            placeholder="留言"
            rows="3"
            {...register("message")}
          />
        </div>

        {/* 送出按鈕 */}
        <div className="text-end">
          <button type="submit" className="btn btn-danger">送出訂單</button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
