function Card(props) {
  //   console.log("hello", props.data);
  // data={
  //     "product_name": "Amazon pvt ltd",
  //     "brand_name": "Amazon",
  //     "price": 300,
  //     "address": {
  //     "state": "Maharashtra",
  //     "city": "Akot"
  //     },
  //     "discription": "Its a good product",
  //     "date": "2014-08-15T00:21:59.051Z",
  //     "time": "2014-06-30T04:38:27.499Z",
  //     "image": "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
  //     },

  let {
    product_name,
    brand_name,
    price,
    address,
    discription,
    date,
    time,
    image,
  } = props.data;
  return (
    <>
      <div className="card flex flex-di-co flex-jc-sb flex-ai-c">
        <div className="top flex flex-jc-sb">
          <div
            className="pic"
            style={{
              background: `url('${image}') center center no-repeat`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="right flex flex-di-co flex-jc-sb">
            <div className="name">{props.data.product_name}</div>
            <div className="brand">{brand_name}</div>
            <div className="price flex flex-ai-c">
              <svg
                width="10"
                height="15"
                viewBox="0 0 10 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.625 14.1328H5.46875V12.8203C7.57812 12.6953 9.14844 11.5703 9.14844 9.63281V9.61719C9.14844 7.94531 8.0625 7.07812 5.94531 6.60156L5.46875 6.5V3.47656C6.4375 3.59375 7.07031 4.125 7.1875 4.97656L7.19531 5.04688H9.01562L9.00781 4.92188C8.86719 3.17188 7.49219 2.04688 5.46875 1.90625V0.59375H4.625V1.90625C2.53906 2.03906 1.09375 3.22656 1.09375 5V5.01562C1.09375 6.63281 2.15625 7.5625 4.1875 8.01562L4.625 8.10938V11.2578C3.41406 11.1328 2.86719 10.5312 2.72656 9.75L2.71094 9.66406H0.890625L0.898438 9.77344C1.02344 11.5781 2.53125 12.6953 4.625 12.8203V14.1328ZM2.97656 4.875V4.86719C2.97656 4.19531 3.53906 3.58594 4.625 3.46875V6.3125C3.42969 6.03906 2.97656 5.5625 2.97656 4.875ZM7.27344 9.78906V9.80469C7.27344 10.5781 6.74219 11.1719 5.46875 11.2656V8.29688C6.86719 8.61719 7.27344 9.05469 7.27344 9.78906Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
              {price}
            </div>
          </div>
        </div>
        <div className="mid flex flex-ai-c flex-jc-sb">
          <div className="location">{address.city}</div>
          <div className="date">Date: {date.substr(0, 10)}</div>
        </div>
        <div className="bottom">{discription}</div>
      </div>
    </>
  );
}
export default Card;
