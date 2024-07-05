
const Ticket = () => {
    return (
        <div>
                     <div className="p-3 shadow bg-[#fff] m-2 h-dvh rounded-[10px]">
                <span className="text-[30px] font-bold">Phiếu mượn trả</span>
                <div className="overflow-y-auto h-[740px] scrollbar-thin">
                    <table className="w-full"  >
                        <thead className="bg-gray-100 h-16">
                            <tr>
                                <th className="text-left px-4">Người mượn</th>
                                <th className="text-left px-4">Ngày mượn</th>
                                <th className="text-left px-4">Người tạo</th>
                                <th className="text-left px-4">Trạng thái </th>
                                <th className="text-left px-4"> Ngày trả</th>
                                <th className="pr-5 py-2 " colSpan="10">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                                <tr className="border-b border-gray-200" >
                                    <td className="text-left px-4 py-2">tri thanh</td>
                                    <td className="text-left px-4 py-2">
                                   4-7/2024
                                    </td>

                                    <td className="text-left px-4 py-2">Van b</td>

                                    <td className="text-left px-4 py-2">
                                     Ok
                                    </td>

                                    <td className="text-left px-4 py-2"> 13-11-2024</td>
                
                                    <td className="px-4 py-2">
                                        <div className="flex items-center justify-center gap-2">
                                            <button className="bg-blue-400 text-[#fff] p-2 rounded-[5px]" >xem </button>
                                        </div>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Ticket;