import { MdOutlineClose } from "react-icons/md";
const DetailBook = (props) => {
    const {handleHideDeltai , dataDetailBook} = props
    return (
        <>
            <div className="fixed shadow bg-[#e4e4e4] p-5 rounded-[10px] top-[30%] left-[30%] w-[700px]">

               <div className="flex items-center justify-between">
               <span className="text-[25px] font-bold">Thông tin sách</span>
               <MdOutlineClose onClick={()=>handleHideDeltai()} className="text-[30px] bg-red-500 p-2 flex justify-center items-center rounded-[5px] cursor-pointer text-[#fff]"/>
               </div>
                {dataDetailBook && dataDetailBook.map((bookDetail)=>(
                    <div key={bookDetail.id}>
                <div className="flex justify-between items-center" >
                    <div className="flex gap-2">
                        <span>Tiêu đề: </span>
                        <span>Masuno Shunmyo</span>
                    </div>
                    <div>
                        <span className="text-blue-500">Đang mượn</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span>Tên khác: </span>
                    <span>{bookDetail.name} </span>
                </div>
                <div className="flex gap-2">
                    <span>Tác Giả: </span>
                    <span>{bookDetail.author}</span>
                </div>
                <div className="flex gap-2">
                    <span>Thể Loại: </span>
                    <span>{bookDetail.genres}</span>
                </div>
                <div className="flex gap-2">
                    <span>Nhà xuất bản: </span>
                    <span>{bookDetail.nhaxuatban}  </span>
                </div>
                <div className="flex gap-2">
                    <span>Ngôn ngữ: </span>
                    <span>{bookDetail.language}  </span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <span>Số lượng: </span>
                        <span>{bookDetail.quantity}</span>
                    </div>
                    <div className="flex gap-2">
                        <span>Giá: </span>
                        <span>{bookDetail.price}  </span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <span>Năm xuất bản: </span>
                    <span>{bookDetail.sine} </span>
                </div>
                <div className="flex gap-2">
                    <span>Mã xếp giá: </span>
                    <span>{bookDetail.maxepgia} </span>
                </div>
                </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default DetailBook;