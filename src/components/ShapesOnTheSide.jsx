const ShapesOnTheSide = ({img,number,className=''}) => {
  return (
    <div className={`flex gap-1 py-1 px-3 bg-bg-primary shapes-on-the-side-shadow w-fit rounded-[20px] ${className}`}>
        <div className="w-4 h-4 mt-1"><img src={img} alt="" /></div>
        <div className="text-text-secondary font-medium ">{number}</div>
        </div>
  )
}

export default ShapesOnTheSide