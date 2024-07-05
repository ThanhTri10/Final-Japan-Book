import dataBook from "../../../../data/data";
// import { GetBook } from "../../../services/GetBookService";
// import { useEffect, useState } from "react";
import { useState } from "react";
import DetailBook from "./DetailBook";
const Book = () => {
    // const [Book, setDataBook] = useState([])
    const [showDetail, setShowDetail] = useState(false)
    const [dataDetailBook, setDataDetailBook] = useState([])


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await GetBook()
    //         console.log(data);
    //         setDataBook(data)
    //     }
    //     fetchData()
    // }, [])
    const handleShowDeltai = (id) => {
        setShowDetail(true)
         console.log(id);
         const data = dataBook.filter((book)=>  book.id === id)
         setDataDetailBook(data)
    }
    const handleHideDeltai = () => {
        setShowDetail(false)
    }
 console.log(Book);
    return (
        <>
        {showDetail &&  
      <DetailBook handleHideDeltai={handleHideDeltai} dataDetailBook={dataDetailBook}></DetailBook>
        }
            <div className="p-3 shadow bg-[#fff] m-2 h-dvh rounded-[10px]">
                <span className="text-[30px] font-bold">Danh sách các cuốn sách</span>
                <div className="overflow-y-auto h-[740px] scrollbar-thin">
                    <table className="w-full"  >
                        <thead className="bg-gray-100 h-16">
                            <tr>
                                <th className="text-left px-4">Tên</th>
                                <th className="text-left px-4">Ảnh</th>
                                <th className="text-left px-4">Tác giả</th>
                                <th className="text-left px-4">Thể loại</th>
                                <th className="text-left px-4">Giá tiền</th>
                                <th className="text-left px-4">Trạng thái</th>
                                <th className="text-left px-4">Năm Xuất Bản</th> 
                                <th className="text-left px-4">Mã xếp giá</th> 


                                <th className="pr-5 py-2 " colSpan="10">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody >

                            {dataBook.map((book, index) => (
                                <tr className="border-b border-gray-200" key={index}>
                                    <td className="text-left px-4 py-2">{book.name}</td>
                                    <td className="text-left px-4 py-2">
                                        <img
                                            className="w-[60px] rounded-[10px]"
                                            src={book.image}
                                            alt={book.image}
                                        />
                                    </td>

                                    <td className="text-left px-4 py-2">{book.author}</td>

                                    <td className="text-left px-4 py-2">
                                        {book.genres}
                                    </td>

                                    <td className="text-left px-4 py-2">{book.price} VND</td>
                                    <td className="text-left px-4 py-2">{book.status}</td>
                                    <td className="text-left px-4 py-2">{book.sine} </td>
                                    <td className="text-left px-4 py-2">{book.maxepgia} </td>



                                    <td className="px-4 py-2">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="bg-blue-400 text-[#fff] p-2 rounded-[5px]" onClick={() => handleShowDeltai(book.id)}>xem chi tiết</button>
                                            <button className="bg-green-500 text-[#fff] p-2 rounded-[5px]">cập nhật</button>
                                            <button className="bg-red-500 text-[#fff] p-2 rounded-[5px]">xóa</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Book;