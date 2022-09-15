const Loader = () => {
  return (
    <div className="w-full h-screen bg-white fixed top-0 left-0 flex flex-row items-center gap-5 justify-center z-40">
        <img src="/assets/logos/logoIcon.png" alt="Pupples Icon" className="animate-ping h-7"/>
        <img src="/assets/logos/logoName.png" alt="Pupples" className="animate-pulse  h-7"/>
    </div>
  )
}

export default Loader