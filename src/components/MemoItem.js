const MemoItem = ({
  text, date
}) => {
  return(
    <div className="MemoItem">
      <div className="memodate">{new Date(date).toLocaleDateString()}</div>
      <div className="memotext">{text.slice(0, 25)}</div>
    </div>
  )
}

export default MemoItem;