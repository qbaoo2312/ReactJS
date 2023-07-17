import React from "react";
import { useState } from "react";

const Counter = () => {
  const [isDisplay, setDisplay] = useState<boolean>(false); // isDisplay = false
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [canbo, setcanbo] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [day, setDay] = useState<number>(0);

  const handldesubmit = () => {
    if (level === "mot") {
      setResult(day * 1200);
    }
    if (level === "hai") {
      setResult(day * 2400);
    }
    if (level === "ba") {
      setResult(day * 3600);
    }
    setDisplay(true);
  };
  return (
    <form action="">
      <div>
        <div>
          <div>
            <label>Họ Tên</label>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
            />
          </div>

          <div>
            <label>Giới tính</label>
            <select
              onChange={(event) => setGender(event.target.value)}
              id="canbo"
            >
              <option selected>---</option>
              <option value="nam">Nam</option>
              <option value="nữ">Nữ</option>
            </select>
          </div>
          <label>Lựa chọn cấp bậc</label>
          <select
            onChange={(event) => setLevel(event.target.value)}
            id="capbac"
          >
            <option selected value="">
              ---
            </option>
            <option value="mot">1</option>
            <option value="hai">2</option>
            <option value="ba">3</option>
          </select>
          <div>
            <label>Số Ngày nằm viện</label>
            <input
              onChange={(event) => setDay(+event.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>Lựa chọn cán bộ</label>
            <select
              onChange={(event) => setcanbo(event.target.value)}
              id="canbo"
            >
              <option selected>---</option>
              <option value="nhân viên">nhân viên</option>
              <option value="cán bộ">cán bộ</option>
              <option value="quản lý">quản lý</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={handldesubmit}>
              Show
            </button>
          </div>
        </div>
      </div>

      <h2>
        Tôi là: {name}, email: {email}, giới tính: {gender}, chức vụ: {canbo},
        được tri trả: {result}
      </h2>
    </form>
  );
};

export default Counter;
