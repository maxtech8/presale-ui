const PhaseButton = ({ children, onClick = () => {} }) => (
  <button
    type="button"
    onClick={onClick}
    className="transition duration-[300ms] hover:scale-[1.05] rounded-[10px] 
                bg-gray_2 py-2 px-4 text-gray_7 font-poppins_medium"
  >
    {children}
  </button>
)

export default PhaseButton
