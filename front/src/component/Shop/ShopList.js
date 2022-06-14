const ShopList =()=>{

    return(
        <>
                        <div class="container mb-2 flex mx-auto w-full items-center justify-center">
								<ul class="flex flex-col p-4">
									<li class="border-gray-400 flex flex-row mb-2">
										<div
											class="select-none rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2 p-6 mt-3 border-mainColor hover:shadow-2xl"
										>
											<div class="flex-1 pl-1 mr-16">
												<div class="font-medium">
													식당 이름 
												</div>
											</div>
											<div class="border-gray-400 flex flex-row mb-8" >
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