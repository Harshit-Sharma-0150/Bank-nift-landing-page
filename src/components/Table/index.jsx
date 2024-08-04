import ApproveIcon from "../../assets/approveIcon.png";
import RejectIcon from "../../assets/rejectIcon.png";
import { pricingData } from "../../db";
import { TableWrapper } from "../Styled-components/TableWrapper";

const MyTable = () => {
  return (
    <TableWrapper>
      <h4>Pricing Table</h4>
      <table className="w-100 table-bordered " border="1px solid #000000">
        <thead>
          <tr>
            <th>
              <div className="d-flex gap-3 align-items-center">
                <h3 className="text-darkSlateGray text-left text-sm-lg text-center text-sm-lg fw-bold">
                  Compare Plans
                </h3>
                <div className="border border-darkGray d-none d-md-inline rounded-pill px-3 py-1 min-w-[106px]">
                  <span>60% off</span>
                </div>
              </div>
              <p className="text-darkGray text-xs text-left text-center text-sm my-2 my-lg-4">
                Choose your workspace plan according to your organisational plan
              </p>
            </th>
            <th className="text-center">
              <p className="text-lg text-3xl text-darkSlateGray fw-bold">
                Free
                <span className="d-block d-lg-inline text-xs text-sm text-darkGray fw-normal">
                  / Lifetime
                </span>
              </p>
              <button className="mt-3 w-50 w-md-100 w-lg-100 px-2 px-lg-4 py-2 text-white ">
                Create Free Account
              </button>
            </th>
            <th className="text-center">
              <p className="text-lg text-3xl text-darkSlateGray fw-bold">
                ₹ 849
                <span className="d-block d-lg-inline text-xs text-sm text-darkGray fw-normal">
                  / Month
                </span>
              </p>
              <button className="mt-3 w-50 w-md-100 w-lg-100 px-2 px-lg-4 py-2 text-white ">
                Login to Buy
              </button>
            </th>
            <th className="text-center">
              <p className="text-lg text-3xl text-darkSlateGray fw-bold">
                ₹ 4310
                <span className="d-block d-lg-inline text-xs text-sm text-darkGray fw-normal">
                  / Year
                </span>
              </p>
              <button className="mt-3 w-50 w-md-100 w-lg-100 px-2 px-lg-4 py-2 text-white ">
                Login to Buy
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingData?.map((item, index) => (
            <tr key={index}>
              <td className="text-darkSlateGray text-sm-lg fw-semibold">
                {item?.title}
              </td>
              <td className="text-center text-darkSlateGray text-xs text-sm">
                {item?.td1 === "approve" || item?.td1 === "reject"
                  ? ""
                  : item?.td1}
                {item?.td1 === "approve" ? (
                  <img
                    src={ApproveIcon}
                    alt="Approve Icon"
                    className=" mx-auto"
                  />
                ) : (
                  item?.td1 === "reject" && (
                    <img
                      src={RejectIcon}
                      alt="Reject Icon"
                      className=" mx-auto"
                    />
                  )
                )}
              </td>
              <td className="text-center text-darkSlateGray text-xs text-sm">
                {item?.td2 === "approve" || item?.td2 === "reject"
                  ? ""
                  : item.td2}
                {item?.td2 === "approve" ? (
                  <img
                    src={ApproveIcon}
                    alt="Approve Icon"
                    className=" mx-auto"
                  />
                ) : (
                  item?.td2 === "reject" && (
                    <img
                      src={RejectIcon}
                      alt="Reject Icon"
                      className=" mx-auto"
                    />
                  )
                )}
              </td>
              <td className="text-center text-darkSlateGray text-xs text-sm">
                {item?.td3 === "approve" || item?.td3 === "reject"
                  ? ""
                  : item.td3}
                {item?.td3 === "approve" ? (
                  <img
                    src={ApproveIcon}
                    alt="Approve Icon"
                    className=" mx-auto"
                  />
                ) : (
                  item?.td3 === "reject" && (
                    <img
                      src={RejectIcon}
                      alt="Reject Icon"
                      className=" mx-auto"
                    />
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default MyTable;
