export const Button = ({ label, onClick }) => {
  const handleClick = () => {
    console.log("WIIIIIHAAAAAAA")
    if (onClick) onClick()
  }
  return <button onClick={handleClick}>{label}</button>
}
