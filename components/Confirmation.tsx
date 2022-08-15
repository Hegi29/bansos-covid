const Confirmation = ({ handleUnderstand }: any) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="form-check flex">
        <input className="form-check-input h-4 w-4 border border-gray-300 rounded-md bg-white text-white accent-blue-jds checked:bg-orange-600 checked:border-orange-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="understand" onChange={handleUnderstand} />
        <label className="form-check-label inline-block text-gray-800" htmlFor="understand">
          Saya menyatakan bahwa data yang diisikan adalah benar dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.
        </label>
      </div>
    </div>
  );
}

export { Confirmation }
