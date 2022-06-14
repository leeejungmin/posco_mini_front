const ShopList =()=>{

    return(
        <>
			<div className="relative">
				<button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="absolute top-12 right-64 h-35 w-40 inline-block px-6 py-2.5 bg-[#FFBC05] hover:bg-[#fcaf0a] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">참여하기</button>
			</div>
                        <div className="absolute top-48 right-60 container mb-2 flex mx-auto w-full items-center justify-center">
								<ul className=" w-9/12 flex flex-col p-4">
									<li className=" flex flex-row mb-2">
										<div
											className="h-40 select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl"
										>
											<div className="flex-1 pl-1 mr-16">
												<div className="font-medium">
													식당 이름, 평점, 위치
												</div>
											</div>
											<div className="border-gray-400 flex flex-row mb-8" >
												식당 사진
											</div>
										</div>
									</li>
									<li className=" border-gray-400 flex flex-row mb-2">
										<div
											className="h-40 select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl"
											>
											<div className="flex-1 pl-1 mr-16">
												<div className="font-medium">
													식당 이름, 평점, 위치
												</div>
											</div>
											<div className="border-gray-400 flex flex-row mb-8" >
												식당 사진
											</div>
										</div>
									</li>
									<li className=" border-gray-400 flex flex-row mb-2">
										<div
											className="h-40 select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainYellow hover:shadow-2xl"
											>
											<div className="flex-1 pl-1 mr-16">
												<div className="font-medium">
													식당 이름, 평점, 위치
												</div>
											</div>
											<div className="border-gray-400 flex flex-row mb-8" >
												식당 사진
											</div>
										</div>
									</li>
									
									
								</ul>
							</div>
										
        </>

    );
}

export default ShopList;