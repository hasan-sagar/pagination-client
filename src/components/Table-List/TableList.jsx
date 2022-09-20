import { React, useState, useEffect } from "react";
import { GetProductList } from "../../ApiRequest/ApiRequest";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

function TableList() {
  let [searchKeyword, setSearchKeyword] = useState("0");
  let [perPage, setPerPage] = useState(5);

  useEffect(() => {
    GetProductList(1, perPage, searchKeyword);
  }, []);

  let ALLProduct = useSelector((state) => state.product.ALLProduct);
  let Total = useSelector((state) => state.product.Total);

  const handlePageClick = (event) => {
    GetProductList(event.selected + 1, perPage, searchKeyword);
  };

  const searchData = () => {
    GetProductList(1, perPage, searchKeyword);
  };
  const perPageOnChange = (e) => {
    setPerPage(parseInt(e.target.value));
    GetProductList(1, e.target.value, searchKeyword);
  };

  const searchKeywordOnChange = (e) => {
    setSearchKeyword(e.target.value);
    if (e.target.value.length === 0) {
      setSearchKeyword("0");
      GetProductList(1, perPage, "0");
    }
  };

  return (
    <div>
      {/* <div className="container my-5 ">
        <div className="row">
          <div className="col-12">
            <div className="card border shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <h4>Product Table</h4>
                    </div>
                    <div className="col-2">
                      <select className="form-control form-select-sm form-select form-control-sm">
                        <option value="5">5 Per Page</option>
                        <option value="10">10 Per Page</option>
                        <option value="20">20 Per Page</option>
                        <option value="30">30 Per Page</option>
                        <option value="50">50 Per Page</option>
                        <option value="100">100 Per Page</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="search here"
                        />

                        <button
                          type="submit"
                          className="btn btn-outline-primary btn-sm mb-0"
                        >
                          Filter
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive data-table">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="text-left">Product</th>
                              <th className="text-right">Price</th>
                              <th className="text-right">Stock</th>
                              <th className="text-right">Product Code</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ALLProduct.map((list, i) => {
                              <tr>
                                <td className="text-left">
                                  <img src={list.image} alt="" />
                                </td>
                                <td className="text-right">{list.title}</td>
                                <td className="text-right">{list.stock}</td>
                                <td className="text-right">
                                  {list.product_code}
                                </td>
                              </tr>;
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body border shadow p-3 mb-5 bg-white rounded">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <h5>Product_Lists_Table</h5>
                    </div>
                    <div className="col-2">
                      <select
                        onChange={perPageOnChange}
                        className="form-control mx-2 form-select-sm form-select form-control-sm"
                      >
                        <option value="5">5 Per Page</option>
                        <option value="10">10 Per Page</option>
                        <option value="20">20 Per Page</option>
                        <option value="30">30 Per Page</option>
                        <option value="50">50 Per Page</option>
                        <option value="100">100 Per Page</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <div className="input-group mb-3">
                        <input
                          onChange={searchKeywordOnChange}
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Search.."
                        />
                        <button
                          onClick={searchData}
                          className="btn  btn-outline-primary btn-sm mb-0"
                          type="button"
                        >
                          Filter
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive data-table">
                        <table className="table ">
                          <thead>
                            <tr>
                              <th className="text-uppercase">Product</th>
                              <th className="text-uppercase ">Price</th>
                              <th className="text-center text-uppercase ">
                                Stock
                              </th>
                              <th className="text-center text-uppercase">
                                Code
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {ALLProduct.map((item, i) => (
                              <tr>
                                <td>
                                  <div>
                                    <div>
                                      <img
                                        src={item.image}
                                        className="avatar me-3"
                                      />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0">{item.title}</h6>
                                      <p className=" mb-0">{item.category}</p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p className=" mb-0">{item.brand}</p>
                                  <p className=" mb-0">{item.price} Taka </p>
                                </td>
                                <td>
                                  <p className="badge  bg-gradient-success">
                                    {item.stock}
                                  </p>
                                </td>
                                <td>
                                  <span>{item.product_code}</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <nav aria-label="Page navigation example">
                        <ReactPaginate
                          previousLabel="<"
                          nextLabel=">"
                          pageClassName="page-item"
                          pageLinkClassName="page-link"
                          previousClassName="page-item"
                          previousLinkClassName="page-link"
                          nextClassName="page-item"
                          nextLinkClassName="page-link"
                          breakLabel="..."
                          breakClassName="page-item"
                          breakLinkClassName="page-link"
                          pageCount={Total / perPage}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={handlePageClick}
                          containerClassName="pagination"
                          activeClassName="active"
                        />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableList;
